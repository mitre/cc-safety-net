import { z } from 'zod';
import { writeIntegrationDenialAudit } from '@/integrations/audit';
import { resolveContainedCwd } from '@/integrations/cwd-containment';
import type { IntegrationDenial } from '@/integrations/denial';
import {
  createFailedClosedDenial,
  formatDenial,
  formatIntegrationError,
  projectGuardDenial,
} from '@/integrations/denial';
import type { GuardDependencies } from '@/integrations/runtime';
import { evaluateRuntimeGuard, GuardEvaluationError } from '@/integrations/runtime';
import { createToolInvocation, type ToolInvocation } from '@/ir/invocation';
import { ENV_FLAGS, envTruthy, shouldRecordAllowedCommands } from '@/policy/env';

/** Canonical OpenClaw shell tool. Only this tool has a proven parameter and workspace mapping. */
const OPENCLAW_EXEC_TOOL = 'exec';

/**
 * `exec.host` values whose execution filesystem is the local Gateway host, the only host whose
 * paths the agent workspace describes. `sandbox`, `node`, and unknown values run somewhere else.
 */
type OpenClawExternalValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | OpenClawExternalValue[]
  | { [key: string]: OpenClawExternalValue };

/** @internal */
export type OpenClawToolContext = {
  toolName: string;
  agentId?: OpenClawExternalValue;
  sessionId?: OpenClawExternalValue;
  sessionKey?: OpenClawExternalValue;
  abortSignal?: AbortSignal;
};

/** @internal */
export type OpenClawBeforeToolCallEvent = OpenClawExternalValue;

const openClawEventSchema = z.looseObject({
  toolName: z.string().trim().min(1),
  params: z.looseObject({}).optional(),
});
const openClawExecParamsSchema = z.looseObject({
  command: z.string().refine((value) => value.trim() !== ''),
  host: z.enum(['auto', 'gateway']).optional(),
  workdir: z
    .string()
    .refine((value) => value.trim() !== '')
    .optional(),
});
const openClawConfigSchema = z.json();
const openClawAgentIdSchema = z.string().trim().min(1);
const openClawWorkspaceSchema = z.string().trim().min(1);
const openClawSessionSchema = z.string().optional();
type OpenClawExecParams = z.infer<typeof openClawExecParamsSchema>;
type OpenClawConfig = z.infer<typeof openClawConfigSchema>;

/** OpenClaw treats a missing result as "no decision" and never rewrites params on our behalf. */
/** @internal */
export type OpenClawBeforeToolCallResult = { block: true; blockReason: string } | undefined;

export type OpenClawPluginApi = {
  config: OpenClawConfig;
  runtime: {
    agent: {
      resolveAgentWorkspaceDir: (config: OpenClawConfig, agentId: string) => OpenClawExternalValue;
    };
  };
  on: (
    hookName: 'before_tool_call',
    handler: (
      event: OpenClawBeforeToolCallEvent,
      ctx: OpenClawToolContext,
    ) => OpenClawBeforeToolCallResult,
    opts: { matcher: readonly [string, ...string[]]; priority: number },
  ) => void;
};

type MalformedOpenClawToolCall = {
  malformed: true;
  denial: IntegrationDenial;
  cwd: string | null;
};

export function registerOpenClawPlugin(api: OpenClawPluginApi): void {
  api.on('before_tool_call', createOpenClawBeforeToolCallHandler(api), {
    matcher: [OPENCLAW_EXEC_TOOL],
    priority: 50,
  });
}

/** @internal */
export function createOpenClawBeforeToolCallHandler(
  api: OpenClawPluginApi,
  options: { guardDependencies?: Partial<GuardDependencies> } = {},
): (event: OpenClawBeforeToolCallEvent, ctx: OpenClawToolContext) => OpenClawBeforeToolCallResult {
  return (event, ctx) => {
    // OpenClaw stops waiting for this hook when the tool call is cancelled, so spending the
    // analysis budget on a call that can no longer run only risks allowing it after the fact.
    if (ctx.abortSignal?.aborted) return blockOpenClawToolCall(createFailedClosedDenial());

    const toolCall = getOpenClawToolCall(event, ctx, api);
    if (!toolCall) return undefined;

    const getSessionId = () =>
      openClawSessionSchema.safeParse(ctx.sessionId ?? ctx.sessionKey).data;
    if ('malformed' in toolCall) {
      writeIntegrationDenialAudit(toolCall.denial, getSessionId, {
        agent: 'openclaw',
        toolName: toolCall.denial.toolName,
        cwd: toolCall.cwd,
      });
      return blockOpenClawToolCall(toolCall.denial);
    }

    try {
      const evaluation = evaluateRuntimeGuard(toolCall, {
        guard: {
          auditAllowed: shouldRecordAllowedCommands(),
          dependencies: options.guardDependencies,
        },
        audit: { agent: 'openclaw', getSessionId },
      });
      return blockOpenClawEvaluation(evaluation, evaluation.stage !== 'config-state');
    } catch (error) {
      if (!(error instanceof GuardEvaluationError)) throw error;
      if (envTruthy(ENV_FLAGS.debug)) {
        console.error(
          `CC Safety Net debug: openclaw before_tool_call analysis failed: ${formatIntegrationError(error.cause)}`,
        );
      }
      return blockOpenClawEvaluation(error.evaluation, true);
    }
  };
}

function getOpenClawToolCall(
  event: OpenClawBeforeToolCallEvent,
  ctx: OpenClawToolContext,
  api: OpenClawPluginApi,
): MalformedOpenClawToolCall | ToolInvocation | undefined {
  const parsedEvent = openClawEventSchema.safeParse(event);
  if (!parsedEvent.success) return malformedOpenClawToolCall(null);
  const toolName = parsedEvent.data.toolName;
  // Only `exec` has a proven parameter and execution-directory mapping.
  if (toolName !== OPENCLAW_EXEC_TOOL) return undefined;

  const parsedExecParams = openClawExecParamsSchema.safeParse(parsedEvent.data.params);
  if (!parsedExecParams.success) return malformedOpenClawToolCall(null, toolName);
  const execParams = parsedExecParams.data;
  const command = execParams.command;

  const workspace = resolveOpenClawWorkspace(api, ctx.agentId);
  if (!workspace) return malformedOpenClawToolCall(null, toolName, command);

  const executionCwd = resolveOpenClawExecutionCwd(workspace, execParams);
  if (!executionCwd) {
    return malformedOpenClawToolCall(workspace, toolName, command, execParams.workdir);
  }

  return createToolInvocation(
    toolName,
    execParams,
    // OpenClaw exec runs the host shell: POSIX shells on Unix, PowerShell on Windows.
    { kind: 'command', shell: 'auto' },
    { configCwd: workspace, executionCwd },
    command,
  );
}

function resolveOpenClawWorkspace(
  api: OpenClawPluginApi,
  agentIdInput: OpenClawExternalValue,
): string | undefined {
  const agentId = openClawAgentIdSchema.safeParse(agentIdInput);
  const config = openClawConfigSchema.safeParse(api.config);
  if (!agentId.success || !config.success) return undefined;
  try {
    const workspaceDir = openClawWorkspaceSchema.safeParse(
      api.runtime.agent.resolveAgentWorkspaceDir(config.data, agentId.data),
    );
    if (!workspaceDir.success) return undefined;
    return resolveContainedCwd('.', [workspaceDir.data]);
  } catch {
    return undefined;
  }
}

function resolveOpenClawExecutionCwd(
  workspace: string,
  execParams: OpenClawExecParams,
): string | undefined {
  if (execParams.workdir === undefined) return workspace;
  return resolveContainedCwd(execParams.workdir, [workspace]);
}

function malformedOpenClawToolCall(
  cwd: string | null,
  toolName?: string,
  command?: string,
  segment?: string,
): MalformedOpenClawToolCall {
  return {
    malformed: true,
    denial: createFailedClosedDenial({ command, segment, toolName }),
    cwd,
  };
}

function blockOpenClawEvaluation(
  evaluation: Parameters<typeof projectGuardDenial>[0],
  includeEvidence: boolean,
): OpenClawBeforeToolCallResult {
  const denial = projectGuardDenial(evaluation, { includeEvidence });
  return denial ? blockOpenClawToolCall(denial) : undefined;
}

function blockOpenClawToolCall(denial: IntegrationDenial): OpenClawBeforeToolCallResult {
  return { block: true, blockReason: formatDenial(denial) };
}
