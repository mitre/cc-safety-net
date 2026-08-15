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
import {
  evaluateRuntimeGuard,
  type GuardDependencies,
  GuardEvaluationError,
} from '@/integrations/runtime';
import type { CommandToolKind, ToolInvocation } from '@/ir/invocation';
import { createToolInvocation } from '@/ir/invocation';
import { getNonCommandToolInputKind } from '@/parser/tool-input';
import { ENV_FLAGS, envTruthy, shouldRecordAllowedCommands } from '@/policy/env';
import type { PolicySnapshotOptions } from '@/policy/snapshot';

const piToolInputSchema = z.looseObject({});
const piToolCallSchema = z.looseObject({});
const piEventTypeSchema = z.string().optional();
const piToolNameSchema = z.string().trim().min(1);
const piCommandSchema = z.string().trim().min(1);
const piWorkingDirectorySchema = z.string().trim().min(1).optional();
const piCommandInputSchema = z.looseObject({ command: piCommandSchema });
const piShellInputSchema = piCommandInputSchema.extend({
  working_directory: piWorkingDirectorySchema,
});

type PiToolCallPayload = z.input<typeof piToolCallSchema>;

type PiApi = {
  on: (
    event: 'tool_call',
    handler: (event: PiToolCallPayload, ctx: PiToolCallContext) => PiToolCallResult,
  ) => void;
};

type PiToolCallContext = {
  cwd: string;
  sessionManager: {
    getSessionId: () => string | undefined;
  };
};

type PiToolCallResult = { block: true; reason: string } | undefined;

type PiCommandToolAdapter = {
  commandField: string;
  cwdField?: string;
  shell: CommandToolKind;
};

const PI_COMMAND_TOOL_ADAPTERS = new Map<string, PiCommandToolAdapter>([
  ['bash', { commandField: 'command', shell: 'posix' }],
  [
    'Shell',
    {
      commandField: 'command',
      cwdField: 'working_directory',
      shell: 'auto',
    },
  ],
]);

type MalformedPiToolCall = {
  malformed: true;
  denial: IntegrationDenial;
  cwd: string | null;
};

export function registerToolCallEvent(pi: PiApi): void {
  pi.on('tool_call', handlePiToolCall);
}

/** @internal - exported for test coverage */
export const handlePiToolCall = createPiToolCallHandler();

/** @internal */
export function createPiToolCallHandler(
  options: {
    guardDependencies?: Partial<GuardDependencies>;
    policyOptions?: PolicySnapshotOptions;
  } = {},
): (event: PiToolCallPayload, ctx: PiToolCallContext) => PiToolCallResult {
  return (event, ctx) => handlePiToolCallWithDependencies(event, ctx, options);
}

function handlePiToolCallWithDependencies(
  event: PiToolCallPayload,
  ctx: PiToolCallContext,
  options: {
    guardDependencies?: Partial<GuardDependencies>;
    policyOptions?: PolicySnapshotOptions;
  },
): PiToolCallResult {
  const toolCall = getPiToolCall(event, ctx);
  if (!toolCall) return undefined;

  if ('malformed' in toolCall) {
    writeIntegrationDenialAudit(toolCall.denial, () => ctx.sessionManager.getSessionId(), {
      agent: 'pi',
      toolName: toolCall.denial.toolName,
      cwd: toolCall.cwd,
    });
    return blockPiToolCall(toolCall.denial);
  }

  try {
    const evaluation = evaluateRuntimeGuard(toolCall, {
      guard: {
        auditAllowed: shouldRecordAllowedCommands(),
        policyOptions: options.policyOptions,
        dependencies: options.guardDependencies,
      },
      audit: {
        agent: 'pi',
        getSessionId: () => ctx.sessionManager.getSessionId(),
      },
    });
    return blockPiEvaluation(evaluation, evaluation.stage !== 'config-state');
  } catch (error) {
    if (!(error instanceof GuardEvaluationError)) throw error;
    if (envTruthy(ENV_FLAGS.debug)) {
      console.error(
        `CC Safety Net debug: pi tool_call analysis failed: ${formatIntegrationError(error.cause)}`,
      );
    }
    return blockPiEvaluation(error.evaluation, toolCall.route.kind === 'command');
  }
}

function getPiToolCall(
  event: PiToolCallPayload,
  ctx: PiToolCallContext,
): MalformedPiToolCall | ToolInvocation | undefined {
  const parsedToolCall = piToolCallSchema.safeParse(event);
  if (!parsedToolCall.success) return undefined;
  const toolCall = parsedToolCall.data;
  const parsedType = piEventTypeSchema.safeParse(toolCall.type);
  if (!parsedType.success || (parsedType.data !== undefined && parsedType.data !== 'tool_call')) {
    return undefined;
  }
  const parsedToolName = piToolNameSchema.safeParse(toolCall.toolName);
  if (!parsedToolName.success) return malformedPiToolCall(ctx);
  const toolName = parsedToolName.data;

  const validContextCwd = ctx.cwd.trim() !== '' ? resolveContainedCwd('.', [ctx.cwd]) : undefined;
  if (!validContextCwd) return malformedPiToolCall(ctx, toolName);

  const adapter = PI_COMMAND_TOOL_ADAPTERS.get(toolName);
  const parsedToolInput = piToolInputSchema.safeParse(toolCall.input);
  if (!parsedToolInput.success) {
    return adapter ? malformedPiToolCall(ctx, toolName) : undefined;
  }
  const toolInput = parsedToolInput.data;

  if (!adapter) {
    return createToolInvocation(
      toolName,
      toolInput,
      { kind: getNonCommandToolInputKind(toolName) },
      { configCwd: ctx.cwd, executionCwd: ctx.cwd },
      null,
    );
  }

  const parsedCommand = piCommandInputSchema.safeParse(toolInput);
  if (!parsedCommand.success) {
    return malformedPiToolCall(ctx, toolName);
  }
  const command = piCommandSchema.parse(parsedCommand.data.command);

  const parsedInput = adapter.cwdField ? piShellInputSchema.safeParse(toolInput) : parsedCommand;
  if (!parsedInput.success) {
    return malformedPiToolCall(ctx, toolName, command);
  }
  const cwdInput = piWorkingDirectorySchema.safeParse(
    'working_directory' in parsedInput.data ? parsedInput.data.working_directory : undefined,
  ).data;
  const executionCwd = cwdInput !== undefined ? resolveContainedCwd(cwdInput, [ctx.cwd]) : ctx.cwd;
  if (!executionCwd) {
    return malformedPiToolCall(ctx, toolName, command, cwdInput);
  }

  return createToolInvocation(
    toolName,
    toolInput,
    { kind: 'command', shell: adapter.shell },
    { configCwd: ctx.cwd, executionCwd },
    command,
  );
}

function malformedPiToolCall(
  ctx: PiToolCallContext,
  toolName?: string,
  command?: string,
  segment?: string,
): MalformedPiToolCall {
  return {
    malformed: true,
    denial: createFailedClosedDenial({ command, segment, toolName }),
    cwd: ctx.cwd.trim() ? ctx.cwd : null,
  };
}

function blockPiEvaluation(
  evaluation: Parameters<typeof projectGuardDenial>[0],
  includeEvidence: boolean,
): PiToolCallResult {
  const denial = projectGuardDenial(evaluation, { includeEvidence });
  return denial ? blockPiToolCall(denial) : undefined;
}

function blockPiToolCall(denial: IntegrationDenial): PiToolCallResult {
  return { block: true, reason: formatDenial(denial) };
}
