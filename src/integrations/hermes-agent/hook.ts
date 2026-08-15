import { resolve } from 'node:path';
import { z } from 'zod';
import type { IntegrationDenial } from '@/integrations/denial';
import {
  getToolRoute,
  outputFailedClosed,
  resolveStandardHookContext,
  runConfiguredHookAdapter,
} from '@/integrations/hook/common';
import { HERMES_AGENT_HOOK_EVENT } from '@/integrations/hook/constants';
import { firstTrustedRoot } from '@/integrations/runtime';
import type { CommandToolKind, ToolCallContext } from '@/ir/invocation';

/**
 * Hermes Agent `pre_tool_call` payload (`agent/shell_hooks.py` `_serialize_payload`).
 * `tool_input` is the tool's `args` object, or null when Hermes had no dict to send.
 */
interface HermesAgentHookInput {
  hook_event_name: string;
  tool_name?: unknown;
  tool_input?: unknown;
  session_id?: string;
  cwd?: string;
}

const hermesToolInputSchema = z.looseObject({ workdir: z.json().optional() });
type HermesToolInput = z.input<typeof hermesToolInputSchema>;

/** `terminal` is the only Hermes tool that carries a shell command. */
const HERMES_AGENT_COMMAND_TOOLS = new Map<string, CommandToolKind>([['terminal', 'posix']]);

export async function runHermesAgentHook(): Promise<void> {
  await runConfiguredHookAdapter<HermesAgentHookInput, unknown, HermesToolInput>({
    agent: 'hermes-agent',
    // Hermes reads `{"action":"block","message":...}` as the tool result the model sees, and
    // treats empty stdout as "no directive", so an allowed call prints nothing.
    createDenyOutput: (message) => ({ action: 'block', message }),
    isSupported: (input) => input.hook_event_name === HERMES_AGENT_HOOK_EVENT,
    getToolName: (input) => input.tool_name,
    getToolInput: (input, toolName) => ({
      ok: true,
      input: hermesToolInputSchema.safeParse(input.tool_input).data ?? {},
      route: getToolRoute(toolName, HERMES_AGENT_COMMAND_TOOLS),
    }),
    getContext: resolveHermesAgentContext,
    getSessionId: (input) => input.session_id,
  });
}

/**
 * `terminal` runs the command in its own `workdir` when the model supplies one, so relative paths
 * must be resolved there rather than in the session cwd. The session cwd stays the config cwd; an
 * unusable `workdir` fails closed because the analyzed directory would not be the executed one.
 */
function resolveHermesAgentContext(
  input: HermesAgentHookInput,
  toolInput: HermesToolInput,
  toolName: string,
  outputDeny: (denial: IntegrationDenial) => void,
): ToolCallContext | null {
  const context = resolveStandardHookContext(input.cwd, toolInput, toolName, outputDeny);
  if (!context) return null;
  if (!Object.hasOwn(toolInput, 'workdir')) return context;

  const workdir = z.string().trim().min(1).safeParse(toolInput.workdir).data;
  if (!workdir) {
    outputFailedClosed(outputDeny, toolInput, toolName);
    return null;
  }

  const executionCwd = firstTrustedRoot([resolve(context.configCwd, workdir)]);
  if (!executionCwd) {
    outputFailedClosed(outputDeny, toolInput, toolName, workdir);
    return null;
  }
  return { ...context, executionCwd };
}
