import { z } from 'zod';
import type { IntegrationDenial } from '@/integrations/denial';
import {
  getToolRoute,
  outputFailedClosed,
  runConfiguredHookAdapter,
} from '@/integrations/hook/common';
import { firstTrustedRoot, resolveContainedCwd } from '@/integrations/runtime';
import type { CommandToolKind, ToolCallContext } from '@/ir/invocation';

/** Cursor preToolUse hook input format */
const cursorHookInputSchema = z.looseObject({
  conversation_id: z.json().optional(),
  hook_event_name: z.json().optional(),
  tool_name: z.json().optional(),
  tool_input: z.json().optional(),
  cwd: z.json().optional(),
  workspace_roots: z.json().optional(),
});
const cursorToolInputSchema = z.looseObject({ working_directory: z.json().optional() });
const cursorStringSchema = z.string();
const cursorRootsSchema = z.array(z.json());
type CursorHookInput = z.infer<typeof cursorHookInputSchema>;
type CursorExternalValue = z.infer<z.ZodJSONSchema> | undefined;
type CursorToolInput = CursorExternalValue;

/** Cursor preToolUse hook output format */
type CursorHookOutput =
  | { permission: 'allow' }
  | { permission: 'deny'; user_message: string; agent_message: string };

const CURSOR_COMMAND_TOOLS = new Map<string, CommandToolKind>([['Shell', 'auto']]);

/** @internal */
export function getCursorToolRoute(toolName: string) {
  return getToolRoute(toolName, CURSOR_COMMAND_TOOLS);
}

type CursorDenyOutput = (denial: IntegrationDenial) => void;

export async function runCursorHook(): Promise<void> {
  await runConfiguredHookAdapter<CursorHookInput, CursorExternalValue, CursorToolInput>({
    agent: 'cursor',
    createDenyOutput: (message): CursorHookOutput => ({
      permission: 'deny',
      user_message: message,
      agent_message: message,
    }),
    createAllowOutput: (): CursorHookOutput => ({ permission: 'allow' }),
    isSupported: () => true,
    getToolName: (input) => input.tool_name,
    getToolInput: (input, toolName) => ({
      ok: true,
      input: input.tool_input,
      route: getCursorToolRoute(toolName),
    }),
    getContext: resolveCursorContext,
    getSessionId: (input) => {
      const sessionId = cursorStringSchema.safeParse(input.conversation_id);
      return sessionId.success ? sessionId.data : undefined;
    },
  });
}

function resolveCursorContext(
  input: CursorHookInput,
  toolInput: CursorToolInput,
  toolName: string,
  outputDeny: CursorDenyOutput,
): ToolCallContext | null {
  const roots = usableCursorRoots(input);
  if (!roots[0]) {
    outputFailedClosed(outputDeny, toolInput, toolName);
    return null;
  }

  const base = resolveContainedCwd(cursorBaseCwd(input.cwd), roots);
  if (!base) {
    const cwd = cursorStringSchema.safeParse(input.cwd);
    outputFailedClosed(outputDeny, toolInput, toolName, cwd.success ? cwd.data : undefined);
    return null;
  }

  const parsedToolInput = cursorToolInputSchema.safeParse(toolInput);
  if (!parsedToolInput.success) {
    return { configCwd: base, executionCwd: base, policyConfigCwds: roots };
  }
  if (!Object.hasOwn(parsedToolInput.data, 'working_directory')) {
    return { configCwd: base, executionCwd: base, policyConfigCwds: roots };
  }

  const workingDirectory = cursorStringSchema.safeParse(parsedToolInput.data.working_directory);
  if (!workingDirectory.success || workingDirectory.data.trim() === '') {
    outputFailedClosed(outputDeny, toolInput, toolName);
    return null;
  }
  const executionCwd = resolveContainedCwd(workingDirectory.data, roots);
  if (!executionCwd) {
    outputFailedClosed(outputDeny, toolInput, toolName, workingDirectory.data);
    return null;
  }
  return { configCwd: base, executionCwd, policyConfigCwds: roots };
}

function usableCursorRoots(input: CursorHookInput): string[] {
  return requestedCursorRoots(input).flatMap((root) => {
    const canonicalRoot = firstTrustedRoot([root]);
    return canonicalRoot ? [canonicalRoot] : [];
  });
}

function requestedCursorRoots(input: CursorHookInput): string[] {
  if (input.workspace_roots === undefined) {
    const cwd = cursorStringSchema.safeParse(input.cwd);
    return cwd.success && cwd.data.trim() !== '' ? [cwd.data] : [];
  }
  const roots = cursorRootsSchema.safeParse(input.workspace_roots);
  if (!roots.success) return [];
  return roots.data.flatMap((root) => {
    const parsed = cursorStringSchema.safeParse(root);
    return parsed.success && parsed.data.trim() !== '' ? [parsed.data] : [];
  });
}

function cursorBaseCwd(cwd: CursorExternalValue): string {
  const parsed = cursorStringSchema.safeParse(cwd);
  return parsed.success && parsed.data.trim() !== '' ? parsed.data : '.';
}
