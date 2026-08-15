import { z } from 'zod';
import { writeIntegrationDenialAudit } from '@/integrations/audit';
import {
  createFailedClosedDenial,
  formatDenial,
  formatIntegrationError,
  type IntegrationDenial,
  projectGuardDenial,
} from '@/integrations/denial';
import {
  ENV_FLAGS,
  envTruthy,
  evaluateRuntimeGuard,
  firstTrustedRoot,
  type GuardDependencies,
  GuardEvaluationError,
  type GuardStage,
  getCommandFromToolInput,
  getNonCommandToolInputKind,
  shouldRecordAllowedCommands,
  ToolInputLimitError,
} from '@/integrations/runtime';
import type { CommandToolKind, ToolCallContext, ToolRoute } from '@/ir/invocation';
import { createToolInvocation } from '@/ir/invocation';

type HookValue = string | number | boolean | null | HookValue[] | { [key: string]: HookValue };

const hookValueSchema: z.ZodType<HookValue> = z.json();
const hookObjectSchema = z.looseObject({});
const hookStringSchema = z.string();
const hookChunkSchema = z.union([
  z.string().transform((chunk) => Buffer.from(chunk, 'utf-8')),
  z.instanceof(Uint8Array).transform((chunk) => Buffer.from(chunk)),
]);
const hookMetadataSchema = z.looseObject({
  cwd: z.string().optional(),
  tool_input: hookValueSchema.optional(),
  toolCall: z
    .looseObject({
      args: hookValueSchema.optional(),
    })
    .optional(),
});
const hookAuditMetadataSchema = z.looseObject({
  cwd: z.string().optional(),
  toolCall: z
    .looseObject({
      args: z
        .looseObject({
          Cwd: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

type HookDenyOutput = (denial: IntegrationDenial) => void;

type HookAdapter<T, ToolName, ToolInput> = {
  agent: string;
  getAgent?: (input: T) => string;
  outputDeny: HookDenyOutput;
  outputAllow?: () => void;
  guardDependencies?: Partial<GuardDependencies>;
  isSupported: (input: T) => boolean;
  getToolName: (input: T) => ToolName;
  getToolInput: (
    input: T,
    toolName: string,
    outputDeny: HookDenyOutput,
  ) => ToolInputResult<ToolInput>;
  getContext: (
    input: T,
    toolInput: ToolInput,
    toolName: string,
    outputDeny: HookDenyOutput,
  ) => ToolCallContext | null;
  getSessionId: (input: T) => string | undefined;
};

type ConfiguredHookAdapter<T, ToolName, ToolInput> = Omit<
  HookAdapter<T, ToolName, ToolInput>,
  'outputDeny' | 'outputAllow'
> & {
  createDenyOutput: (message: string) => object;
  createAllowOutput?: () => object;
};

type ToolInputResult<T> = { ok: true; input: T; route: ToolRoute } | { ok: false };

/** @internal Maximum raw stdin accepted from hook hosts before fail-closed denial (8 MiB). */
export const HOOK_INPUT_MAX_BYTES = 8 * 1024 * 1024;

function outputHookDeny(
  createDenyOutput: (message: string) => object,
  denial: IntegrationDenial,
): void {
  console.log(JSON.stringify(createDenyOutput(formatDenial(denial))));
}

async function readHookInput<T>(outputDeny: HookDenyOutput): Promise<T | undefined> {
  let inputText: string;
  try {
    inputText = (await readBoundedHookInput(process.stdin)).trim();
  } catch {
    outputDeny({ reason: 'Failed to parse hook input JSON.' });
    return undefined;
  }

  if (!inputText) {
    outputDeny({ reason: 'Missing hook input JSON.' });
    return undefined;
  }

  return parseHookJson<T>(inputText, outputDeny, 'Failed to parse hook input JSON.');
}

/** Reads hook input without buffering more than HOOK_INPUT_MAX_BYTES raw bytes. */
export async function readBoundedHookInput<
  DestroyResult = z.input<z.ZodUnknown>,
  CancelResult = z.input<z.ZodUnknown>,
>(
  input: (AsyncIterable<Buffer | Uint8Array | string> | Iterable<Buffer | Uint8Array | string>) & {
    destroy?: () => DestroyResult;
    cancel?: () => CancelResult;
  },
): Promise<string> {
  const chunks: Buffer[] = [];
  let bytes = 0;
  for await (const chunk of input) {
    const buffer = hookChunkSchema.parse(chunk);
    bytes += buffer.byteLength;
    if (bytes > HOOK_INPUT_MAX_BYTES) {
      stopHookInput(input);
      throw new Error('hook input byte limit exceeded');
    }
    chunks.push(buffer);
  }
  return Buffer.concat(chunks, bytes).toString('utf-8');
}

function stopHookInput<DestroyResult, CancelResult>(input: {
  destroy?: () => DestroyResult;
  cancel?: () => CancelResult;
}): void {
  try {
    if (input.destroy) {
      Promise.resolve(input.destroy()).catch(() => {});
      return;
    }
    if (input.cancel) Promise.resolve(input.cancel()).catch(() => {});
  } catch {}
}

export function parseHookJson<T>(
  inputText: string,
  outputDeny: HookDenyOutput,
  strictReason: string,
): T | undefined {
  try {
    return JSON.parse(inputText);
  } catch {
    outputDeny({ reason: strictReason });
    return undefined;
  }
}

export function getToolRoute(
  toolName: string,
  commandTools: ReadonlyMap<string, CommandToolKind>,
): ToolRoute {
  const shell = commandTools.get(toolName);
  return shell ? { kind: 'command', shell } : { kind: getNonCommandToolInputKind(toolName) };
}

export function resolveStandardHookContext<CwdInput, ToolInput>(
  cwdInput: CwdInput,
  toolInput: ToolInput,
  toolName: string,
  outputDeny: HookDenyOutput,
): ToolCallContext | null {
  const requestedCwd = cwdInput === undefined ? process.cwd() : cwdInput;
  const parsedCwd = hookStringSchema.safeParse(requestedCwd);
  const cwd =
    parsedCwd.success && parsedCwd.data.trim() !== ''
      ? firstTrustedRoot([parsedCwd.data])
      : undefined;
  if (cwd) return { configCwd: cwd, executionCwd: cwd };

  outputFailedClosed(
    outputDeny,
    toolInput,
    toolName,
    parsedCwd.success ? parsedCwd.data : undefined,
  );
  return null;
}

export function outputFailedClosed<ToolInput>(
  outputDeny: HookDenyOutput,
  toolInput?: ToolInput,
  toolName?: string,
  segment?: string,
): void {
  let command: string | undefined;
  try {
    command = getCommandFromToolInput(toolInput);
  } catch (error) {
    if (!(error instanceof ToolInputLimitError)) throw error;
  }
  outputDeny(
    createFailedClosedDenial({
      command,
      segment,
      toolName,
    }),
  );
}

async function runHookAdapter<T, ToolName, ToolInput>(
  adapter: HookAdapter<T, ToolName, ToolInput>,
): Promise<void> {
  const input = await readHookInput<T>(adapter.outputDeny);
  if (input === undefined) {
    return;
  }
  if (!hookObjectSchema.safeParse(input).success) {
    outputFailedClosed(adapter.outputDeny);
    return;
  }

  if (!adapter.isSupported(input)) {
    return;
  }

  const agent = adapter.getAgent?.(input) ?? adapter.agent;
  const adapterKind = adapter.agent === agent ? undefined : adapter.agent;
  const auditCwd = getHookAuditCwd(input);

  const outputPreflightDeny = (denial: IntegrationDenial, toolName?: string): void => {
    writeIntegrationDenialAudit(denial, () => adapter.getSessionId(input), {
      agent,
      ['shape']: adapterKind,
      toolName,
      cwd: auditCwd,
    });
    adapter.outputDeny(denial);
  };

  const toolNameInput = adapter.getToolName(input);
  const parsedToolName = hookStringSchema.safeParse(toolNameInput);
  if (!parsedToolName.success || parsedToolName.data.trim() === '') {
    outputFailedClosed((denial) => outputPreflightDeny(denial), getRawHookToolInput(input));
    return;
  }
  const toolName = parsedToolName.data;
  const outputToolPreflightDeny = (denial: IntegrationDenial): void =>
    outputPreflightDeny(denial, toolName);

  let toolInputResult: ToolInputResult<ToolInput>;
  try {
    toolInputResult = adapter.getToolInput(input, toolName, outputToolPreflightDeny);
  } catch (error) {
    if (!(error instanceof ToolInputLimitError)) throw error;
    outputFailedClosed(outputToolPreflightDeny, undefined, toolName);
    return;
  }
  if (!toolInputResult.ok) return;

  const context = adapter.getContext(
    input,
    toolInputResult.input,
    toolName,
    outputToolPreflightDeny,
  );
  if (!context) return;

  let command: string | undefined;
  try {
    command = getCommandFromToolInput(toolInputResult.input);
  } catch (error) {
    if (!(error instanceof ToolInputLimitError)) throw error;
    outputFailedClosed(outputToolPreflightDeny, undefined, toolName);
    return;
  }
  const invocation = createToolInvocation(
    toolName,
    toolInputResult.input,
    toolInputResult.route,
    context,
    command ?? null,
  );
  try {
    const evaluation = evaluateRuntimeGuard(invocation, {
      guard: {
        auditAllowed: shouldRecordAllowedCommands(),
        dependencies: adapter.guardDependencies,
      },
      audit: {
        agent,
        ['shape']: adapterKind,
        getSessionId: () => adapter.getSessionId(input),
      },
    });
    const denial = projectGuardDenial(evaluation, {
      includeEvidence: true,
      toolName: evaluation.stage === 'command-analysis' ? undefined : toolName,
    });
    if (denial) {
      adapter.outputDeny(denial);
      return;
    }
    adapter.outputAllow?.();
  } catch (error) {
    if (!(error instanceof GuardEvaluationError)) {
      throw error;
    }
    logHookGuardError(error);
    const denial = projectGuardDenial(error.evaluation, {
      includeEvidence: true,
      toolName: error.evaluation.stage === 'command-analysis' ? undefined : toolName,
    });
    if (denial) adapter.outputDeny(denial);
    return;
  }
}

function logHookGuardError(error: GuardEvaluationError): void {
  if (!envTruthy(ENV_FLAGS.debug)) return;
  console.error(
    `CC Safety Net debug: ${getHookGuardErrorLabel(error.stage)}: ${formatIntegrationError(error.cause)}`,
  );
}

function getHookGuardErrorLabel(stage: GuardStage): string {
  if (stage === 'policy-protection') return 'hook policy protection failed';
  if (stage === 'config-load') return 'hook config loading failed';
  if (stage === 'secret-protection') return 'hook secret protection failed';
  return 'hook analysis failed';
}

function getRawHookToolInput<T>(input: T): HookValue | undefined {
  const metadata = hookMetadataSchema.safeParse(input);
  if (!metadata.success) return undefined;
  if (metadata.data.tool_input !== undefined) return metadata.data.tool_input;
  return metadata.data.toolCall?.args;
}

function getHookAuditCwd<T>(input: T): string | null {
  const metadata = hookAuditMetadataSchema.safeParse(input);
  if (!metadata.success) return null;
  return metadata.data.cwd ?? metadata.data.toolCall?.args?.Cwd ?? null;
}

export async function runConfiguredHookAdapter<
  T,
  ToolName = z.input<z.ZodUnknown>,
  ToolInput = z.input<z.ZodUnknown>,
>(adapter: ConfiguredHookAdapter<T, ToolName, ToolInput>): Promise<void> {
  const outputDeny: HookDenyOutput = (denial) => outputHookDeny(adapter.createDenyOutput, denial);
  const createAllowOutput = adapter.createAllowOutput;
  const outputAllow = createAllowOutput
    ? () => console.log(JSON.stringify(createAllowOutput()))
    : undefined;

  await runHookAdapter({ ...adapter, outputDeny, outputAllow });
}
