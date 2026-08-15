import { accessSync, constants, statSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Config, Plugin, PluginInput } from '@opencode-ai/plugin';
import { z } from 'zod';
import { writeIntegrationDenialAudit } from '@/integrations/audit';
import {
  createFailedClosedDenial,
  formatDenial,
  type IntegrationDenial,
  projectGuardDenial,
} from '@/integrations/denial';
import { loadBuiltinCommands } from '@/integrations/opencode/builtin-commands/index';
import * as guardEngine from '@/integrations/runtime';
import * as invocationDomain from '@/ir/invocation';
import * as toolRouting from '@/parser/tool-input';
import { shouldRecordAllowedCommands } from '@/policy/env';

type CCSafetyNetPluginInput = Pick<PluginInput, 'directory'> & {
  homeDir?: string;
};

const POWERSHELL_EXECUTABLES = new Set(['powershell', 'pwsh']);
const POSIX_EXECUTABLES = new Set(['bash', 'dash', 'ksh', 'sh', 'zsh']);
const pluginToolInputSchema = z.json();
const pluginToolEventSchema = z.object({
  tool: z.string().trim().min(1),
  sessionID: z.string().optional(),
});
const pluginSessionSchema = z.object({ sessionID: z.string().optional() });
const pluginWorkdirSchema = z.looseObject({ workdir: z.string().trim().min(1).optional() });
const configuredShellSchema = z
  .looseObject({ shell: z.string().optional().catch(undefined) })
  .optional()
  .transform((value) => value?.shell);

type PluginToolInput = z.infer<typeof pluginToolInputSchema>;
type ConfiguredShellPayload = string | number | boolean | null | undefined;

export function createCCSafetyNetPlugin(
  guardDependencies: Partial<guardEngine.GuardDependencies> = {},
) {
  return (async ({ directory, homeDir }: CCSafetyNetPluginInput) => {
    const configCwd = resolve(directory);
    let currentConfig: Config | undefined;

    return {
      config: async (opencodeConfig: Config) => {
        currentConfig = opencodeConfig;
        const builtinCommands = loadBuiltinCommands();
        const existingCommands = opencodeConfig.command ?? {};

        opencodeConfig.command = {
          ...builtinCommands,
          ...existingCommands,
        };
      },

      'tool.execute.before': async (input, output) => {
        const parsedInput = pluginToolEventSchema.safeParse(input);
        const sessionID = pluginSessionSchema.safeParse(input).data?.sessionID;
        const throwPreflightDenial = (
          denial: IntegrationDenial,
          toolName?: string,
          cwd: string | null = configCwd,
        ): never => {
          writeIntegrationDenialAudit(denial, () => sessionID, {
            agent: 'opencode',
            toolName,
            cwd,
            homeDir,
          });
          throwBlocked(denial);
        };
        if (!parsedInput.success) {
          throwPreflightDenial(createFailedClosedDenial());
        }
        const event = pluginToolEventSchema.parse(input);

        const parsedToolInput = pluginToolInputSchema.safeParse(output.args);
        if (!parsedToolInput.success) {
          throwPreflightDenial(createFailedClosedDenial({ toolName: event.tool }));
        }
        const toolInput = pluginToolInputSchema.parse(output.args);
        let command: string | undefined;
        try {
          command = toolRouting.getCommandFromToolInput(toolInput);
        } catch (error) {
          if (!(error instanceof toolRouting.ToolInputLimitError)) throw error;
          throwPreflightDenial(createFailedClosedDenial({ toolName: event.tool }), event.tool);
        }
        const shellRoute = resolveOpenCodeShellRoute(configuredShellSchema.parse(currentConfig));
        const route = getOpenCodeToolRoute(event.tool, shellRoute);
        const executionCwd = resolveOpenCodeExecutionCwd(configCwd, toolInput);
        if (!isUsableDirectory(configCwd) || !executionCwd) {
          return throwPreflightDenial(
            createFailedClosedDenial({ command, toolName: event.tool }),
            event.tool,
          );
        }
        const context: invocationDomain.ToolCallContext = { configCwd, executionCwd };
        const invocation = invocationDomain.createToolInvocation(
          event.tool,
          toolInput,
          route,
          context,
          command ?? null,
        );
        try {
          const evaluation = guardEngine.evaluateRuntimeGuard(invocation, {
            guard: { auditAllowed: shouldRecordAllowedCommands(), dependencies: guardDependencies },
            audit: {
              agent: 'opencode',
              homeDir,
              getSessionId: () => event.sessionID,
            },
          });
          throwGuardDenial(evaluation, evaluation.stage !== 'config-state');
        } catch (error) {
          if (!(error instanceof guardEngine.GuardEvaluationError)) throw error;
          if (
            error.stage === 'policy-protection' ||
            error.stage === 'config-load' ||
            error.stage === 'secret-protection'
          ) {
            throw error.cause;
          }
          throwGuardDenial(error.evaluation, true);
          return;
        }
      },
    };
  }) satisfies Plugin;
}

/** @internal */
export function resolveOpenCodeShellRoute(
  configuredShell: ConfiguredShellPayload,
): invocationDomain.CommandToolKind {
  const shell = z.string().optional().catch(undefined).parse(configuredShell);
  if (!shell) return 'auto';
  const executable = shell
    .trim()
    .split(/[\\/]/)
    .at(-1)
    ?.toLowerCase()
    .replace(/\.exe$/, '');
  if (!executable) return 'auto';
  if (POWERSHELL_EXECUTABLES.has(executable)) return 'powershell';
  if (POSIX_EXECUTABLES.has(executable)) return 'posix';
  return 'auto';
}

function getOpenCodeToolRoute(
  toolName: string,
  shell: invocationDomain.CommandToolKind,
): invocationDomain.ToolRoute {
  if (toolName === 'bash') return { kind: 'command', shell };
  return { kind: toolRouting.getNonCommandToolInputKind(toolName) };
}

function resolveOpenCodeExecutionCwd(configCwd: string, toolInput: PluginToolInput): string | null {
  const parsed = pluginWorkdirSchema.safeParse(toolInput);
  if (!parsed.success) return null;
  const workdir = parsed.data.workdir;
  if (!workdir) return configCwd;
  const resolvedWorkdir =
    process.platform === 'win32' ? normalizeOpenCodeWindowsWorkdir(workdir) : workdir;
  if (!resolvedWorkdir) return null;

  const executionCwd = resolve(configCwd, resolvedWorkdir);
  return isUsableDirectory(executionCwd) ? executionCwd : null;
}

/** @internal */
export function normalizeOpenCodeWindowsWorkdir(workdir: string): string | null {
  const normalized = workdir
    .replace(/^\/([a-zA-Z]):(?:[\\/]|$)/, (_, drive: string) => `${drive.toUpperCase()}:/`)
    .replace(/^\/([a-zA-Z])(?:[\\/]|$)/, (_, drive: string) => `${drive.toUpperCase()}:/`)
    .replace(/^\/cygdrive\/([a-zA-Z])(?:[\\/]|$)/, (_, drive: string) => `${drive.toUpperCase()}:/`)
    .replace(/^\/mnt\/([a-zA-Z])(?:[\\/]|$)/, (_, drive: string) => `${drive.toUpperCase()}:/`);
  return normalized.startsWith('/') ? null : normalized;
}

function isUsableDirectory(path: string): boolean {
  try {
    if (!statSync(path).isDirectory()) return false;
    accessSync(path, constants.R_OK | constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

function throwGuardDenial(evaluation: guardEngine.GuardEvaluation, includeEvidence: boolean): void {
  const denial = projectGuardDenial(evaluation, { includeEvidence });
  if (denial) throwBlocked(denial);
}

function throwBlocked(denial: IntegrationDenial): never {
  throw new Error(formatDenial(denial));
}
