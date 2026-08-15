import type { ShellCommand, ToolCall, URI } from '@ampcode/plugin';
import { z } from 'zod';
import { writeIntegrationDenialAudit } from '@/integrations/audit';
import { resolveContainedCwd } from '@/integrations/cwd-containment';
import {
  createFailedClosedDenial,
  formatDenial,
  formatIntegrationError,
  type IntegrationDenial,
  projectGuardDenial,
} from '@/integrations/denial';
import * as guardEngine from '@/integrations/runtime';
import * as invocationDomain from '@/ir/invocation';
import * as toolRouting from '@/parser/tool-input';
import { ENV_FLAGS, envTruthy, shouldRecordAllowedCommands } from '@/policy/env';
import type { PolicySnapshotOptions } from '@/policy/snapshot';

const ampToolInputSchema = z.record(z.string(), z.json());
const ampToolCallSchema = z.object({
  toolUseID: z.string(),
  tool: z.string().trim().min(1),
  input: ampToolInputSchema,
  thread: z.object({ id: z.string().trim().min(1) }).optional(),
});
const ampThreadSchema = z.object({ thread: z.object({ id: z.string().trim().min(1) }).optional() });
const ampShellCommandSchema = z.object({
  command: z.string().trim().min(1),
  dir: z.string().optional(),
});
const ampIngressSchema = z.union([z.json(), z.undefined()]);

type AmpToolCallPayload = ToolCall | z.infer<typeof ampIngressSchema>;
type AmpShellCommandPayload = z.infer<typeof ampIngressSchema>;

type AmpApi = {
  system: { workspaceRoot: URI | null };
  helpers: {
    filePathFromURI: (uri: URI) => string;
    shellCommandFromToolCall: (event: ToolCall) => ShellCommand | AmpShellCommandPayload;
  };
};

type AmpToolCallResult = { action: 'allow' } | { action: 'reject-and-continue'; message: string };

type MalformedAmpToolCall = {
  malformed: true;
  denial: IntegrationDenial;
  cwd: string | null;
};

type AmpHandlerOptions = {
  guardDependencies?: Partial<guardEngine.GuardDependencies>;
  policyOptions?: PolicySnapshotOptions;
};

export const handleAmpToolCall = createAmpToolCallHandler();

/** @internal */
export function createAmpToolCallHandler(
  options: AmpHandlerOptions = {},
): (event: AmpToolCallPayload, amp: AmpApi) => AmpToolCallResult {
  return (event, amp) => handleAmpToolCallWithDependencies(event, amp, options);
}

function handleAmpToolCallWithDependencies(
  event: AmpToolCallPayload,
  amp: AmpApi,
  options: AmpHandlerOptions,
): AmpToolCallResult {
  const toolCall = getAmpToolInvocation(event, amp);
  const getSessionId = () => ampThreadId(event);

  if ('malformed' in toolCall) {
    writeIntegrationDenialAudit(toolCall.denial, getSessionId, {
      agent: 'amp',
      toolName: toolCall.denial.toolName,
      cwd: toolCall.cwd,
    });
    return rejectAmpToolCall(toolCall.denial);
  }

  try {
    const evaluation = guardEngine.evaluateRuntimeGuard(toolCall, {
      guard: {
        auditAllowed: shouldRecordAllowedCommands(),
        policyOptions: options.policyOptions,
        dependencies: options.guardDependencies,
      },
      audit: {
        agent: 'amp',
        getSessionId,
      },
    });
    return projectAmpEvaluation(evaluation, evaluation.stage !== 'config-state');
  } catch (error) {
    if (!(error instanceof guardEngine.GuardEvaluationError)) throw error;
    if (envTruthy(ENV_FLAGS.debug)) {
      console.error(
        `CC Safety Net debug: amp tool.call analysis failed: ${formatIntegrationError(error.cause)}`,
      );
    }
    return projectAmpEvaluation(error.evaluation, toolCall.route.kind === 'command');
  }
}

function getAmpToolInvocation(
  event: AmpToolCallPayload,
  amp: AmpApi,
): MalformedAmpToolCall | invocationDomain.ToolInvocation {
  const parsedToolCall = ampToolCallSchema.safeParse(event);
  if (!parsedToolCall.success) return malformedAmpToolCall(null);
  const toolCall = parsedToolCall.data;

  const workspaceRoot = resolveAmpWorkspaceRoot(amp);
  if (!workspaceRoot) return malformedAmpToolCall(null, toolCall.tool);

  const shell = extractAmpShellCommand(amp, toolCall);
  if (!shell.ok) return malformedAmpToolCall(workspaceRoot, toolCall.tool);

  if (!shell.command) {
    return invocationDomain.createToolInvocation(
      toolCall.tool,
      toolCall.input,
      { kind: toolRouting.getNonCommandToolInputKind(toolCall.tool) },
      { configCwd: workspaceRoot, executionCwd: workspaceRoot },
      null,
    );
  }

  const executionCwd =
    shell.command.dir !== undefined
      ? resolveContainedCwd(shell.command.dir, [workspaceRoot])
      : workspaceRoot;
  if (!executionCwd) {
    return malformedAmpToolCall(
      workspaceRoot,
      toolCall.tool,
      shell.command.command,
      shell.command.dir,
    );
  }

  return invocationDomain.createToolInvocation(
    toolCall.tool,
    toolCall.input,
    { kind: 'command', shell: 'posix' },
    { configCwd: workspaceRoot, executionCwd },
    shell.command.command,
  );
}

function resolveAmpWorkspaceRoot(amp: AmpApi): string | undefined {
  const workspaceRoot = amp.system.workspaceRoot;
  if (!workspaceRoot) return undefined;
  try {
    const rootPath = amp.helpers.filePathFromURI(workspaceRoot);
    if (rootPath.trim() === '') return undefined;
    return resolveContainedCwd('.', [rootPath]);
  } catch {
    return undefined;
  }
}

function extractAmpShellCommand(
  amp: AmpApi,
  event: ToolCall,
): { ok: true; command: ShellCommand | null } | { ok: false } {
  try {
    const command = amp.helpers.shellCommandFromToolCall(event);
    if (command === null) return { ok: true, command: null };
    const parsedCommand = ampShellCommandSchema.safeParse(command);
    return parsedCommand.success ? { ok: true, command: parsedCommand.data } : { ok: false };
  } catch {
    return { ok: false };
  }
}

function ampThreadId(event: AmpToolCallPayload): string | undefined {
  return ampThreadSchema.safeParse(event).data?.thread?.id;
}

function malformedAmpToolCall(
  cwd: string | null,
  toolName?: string,
  command?: string,
  segment?: string,
): MalformedAmpToolCall {
  return {
    malformed: true,
    denial: createFailedClosedDenial({ command, segment, toolName }),
    cwd,
  };
}

function projectAmpEvaluation(
  evaluation: Parameters<typeof projectGuardDenial>[0],
  includeEvidence: boolean,
): AmpToolCallResult {
  const denial = projectGuardDenial(evaluation, { includeEvidence });
  return denial ? rejectAmpToolCall(denial) : { action: 'allow' };
}

function rejectAmpToolCall(denial: IntegrationDenial): AmpToolCallResult {
  return { action: 'reject-and-continue', message: formatDenial(denial) };
}
