import { describe, expect, test } from 'bun:test';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type {
  PluginAPI,
  Subscription,
  ToolCall,
  ToolCallEvent,
  ToolCallResult,
} from '@ampcode/plugin';
import { z } from 'zod';
import ccSafetyNetAmpPlugin from '@/integrations/amp/index';

type Registration = {
  event: 'tool.call';
  handler: (event: ToolCallEvent) => ToolCallResult;
};
const shellToolCallSchema = z.object({ input: z.object({ command: z.string() }) });

describe('Amp plugin entrypoint', () => {
  test('registers exactly one tool.call handler that guards the call', () => {
    const dir = mkdtempSync(join(tmpdir(), 'safety-net-amp-index-'));
    try {
      const registrations: Registration[] = [];
      ccSafetyNetAmpPlugin(fakeAmp(registrations, dir));

      expect(registrations.map((registration) => registration.event)).toEqual(['tool.call']);

      const handler = registrations[0]?.handler;
      expect(handler?.(shellEvent('git status'))).toEqual({ action: 'allow' });
      expect(handler?.(shellEvent('git reset --hard'))).toMatchObject({
        action: 'reject-and-continue',
      });
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

function shellEvent(command: string): ToolCallEvent {
  return {
    toolUseID: 'amp-tool-use',
    tool: 'shell_command',
    input: { command },
    thread: { id: 'T-amp-index' },
  };
}

function fakeAmp(registrations: Registration[], rootDir: string) {
  return {
    system: { workspaceRoot: pathToFileURL(rootDir) },
    helpers: {
      filePathFromURI: (uri: { toString(): string }) => fileURLToPath(uri.toString()),
      shellCommandFromToolCall: (event: ToolCall) => {
        if (event.tool !== 'shell_command') return null;
        return { command: shellToolCallSchema.parse(event).input.command };
      },
    },
    on: (event: 'tool.call', handler: (event: ToolCallEvent) => ToolCallResult) => {
      registrations.push({ event, handler });
      return { unsubscribe: () => {} };
    },
  } satisfies {
    system: Pick<PluginAPI['system'], 'workspaceRoot'>;
    helpers: Pick<PluginAPI['helpers'], 'filePathFromURI' | 'shellCommandFromToolCall'>;
    on: (event: 'tool.call', handler: (event: ToolCallEvent) => ToolCallResult) => Subscription;
  };
}
