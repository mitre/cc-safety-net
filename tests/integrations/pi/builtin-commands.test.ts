import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import ccSafetyNetPiExtension from '@/integrations/pi';
import {
  buildSafetyNetCommandPrompt,
  registerBuiltinCommands,
} from '@/integrations/pi/builtin-commands';

function normalizeNewlines(value: string): string {
  return value.replace(/\r\n/g, '\n');
}

describe('Pi built-in commands', () => {
  test('registers cc-safety-net command', () => {
    const pi = recordingPi();

    registerBuiltinCommands(pi);

    expect(pi.commands['cc-safety-net']?.description).toBe('Manage CC Safety Net rulebooks');
  });

  test('uses the cc-safety-net skill workflow as the command prompt', () => {
    const skill = readFileSync(join(process.cwd(), 'skills/cc-safety-net/SKILL.md'), 'utf-8');

    expect(buildSafetyNetCommandPrompt('add a project rule')).toContain(
      normalizeNewlines(skill.slice(skill.indexOf('## Workflow'))),
    );
  });

  test('appends slash command arguments as the user request', () => {
    expect(buildSafetyNetCommandPrompt('block git clean')).toContain(
      '## User request\n\nblock git clean',
    );
  });

  test('uses a generic user request when no arguments are provided', () => {
    expect(buildSafetyNetCommandPrompt('   ')).toContain(
      '## User request\n\nHelp me configure CC Safety Net.',
    );
  });

  test('sends the command prompt immediately when pi is idle', async () => {
    const pi = recordingPi();
    registerBuiltinCommands(pi);

    await pi.commands['cc-safety-net']?.handler('block git reset', { isIdle: () => true });

    expect(pi.sentMessages).toEqual([
      {
        content: buildSafetyNetCommandPrompt('block git reset'),
        options: undefined,
      },
    ]);
  });

  test('queues the command prompt as a follow-up when pi is streaming', async () => {
    const pi = recordingPi();
    registerBuiltinCommands(pi);

    await pi.commands['cc-safety-net']?.handler('block git reset', { isIdle: () => false });

    expect(pi.sentMessages).toEqual([
      {
        content: buildSafetyNetCommandPrompt('block git reset'),
        options: { deliverAs: 'followUp' },
      },
    ]);
  });

  test('extension registers both tool_call event and command', () => {
    const pi = recordingPi();

    ccSafetyNetPiExtension(pi);

    expect(pi.events.map((event) => event.name)).toEqual(['tool_call']);
    expect(pi.commands['cc-safety-net']?.description).toBe('Manage CC Safety Net rulebooks');
  });
});

function recordingPi() {
  const commands: Record<string, { description?: string; handler: CommandHandler }> = {};
  const events: Array<{ name: string; handler: ToolCallHandler }> = [];
  const sentMessages: Array<{ content: string; options: DeliveryOptions | undefined }> = [];
  const pi = {
    commands,
    events,
    sentMessages,
    on: (name: string, handler: ToolCallHandler) => {
      pi.events.push({ name, handler });
    },
    registerCommand: (name: string, command: { description?: string; handler: CommandHandler }) => {
      pi.commands[name] = command;
    },
    sendUserMessage: (content: string, options?: DeliveryOptions) => {
      pi.sentMessages.push({ content, options });
    },
  };
  return pi;
}

type CommandHandler = (args: string, ctx: { isIdle: () => boolean }) => Promise<void>;
type ToolCallHandler = Parameters<Parameters<typeof ccSafetyNetPiExtension>[0]['on']>[1];
type DeliveryOptions = { deliverAs: 'followUp' };
