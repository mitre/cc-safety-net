import { z } from 'zod';

export type CommandToolKind = 'posix' | 'powershell' | 'auto';

export type NonCommandToolInputKind = 'patch' | 'path' | 'grep' | 'glob' | 'unknown';

/** Unparsed tool input crossing from an integration into the analysis pipeline. */
const ToolInputValueSchema = z.unknown();
export type ToolInputValue = z.input<typeof ToolInputValueSchema>;

type NonCommandToolRoute = {
  [Kind in NonCommandToolInputKind]: { kind: Kind };
}[NonCommandToolInputKind];

export type ToolRoute = { kind: 'command'; shell: CommandToolKind } | NonCommandToolRoute;

export type ToolCallContext = {
  configCwd: string;
  executionCwd: string;
  policyConfigCwds?: readonly string[];
};

type ToolInvocationBase = {
  toolName: string;
  input: ToolInputValue;
  context: ToolCallContext;
};

export type ToolInvocation =
  | (ToolInvocationBase & {
      route: Extract<ToolRoute, { kind: 'command' }>;
      command: string | null;
    })
  | (ToolInvocationBase & {
      route: Exclude<ToolRoute, { kind: 'command' }>;
    });

export function createToolInvocation(
  toolName: string,
  input: ToolInputValue,
  route: ToolRoute,
  context: ToolCallContext,
  command: string | null,
): ToolInvocation {
  if (route.kind !== 'command') return { toolName, input, route, context };
  return { toolName, input, route, context, command };
}
