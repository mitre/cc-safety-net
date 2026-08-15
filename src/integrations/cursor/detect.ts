/**
 * Cursor hook detection.
 */

import { existsSync, readFileSync } from 'node:fs';
import { z } from 'zod';
import { CURSOR_HOOK_COMMAND, getCursorHooksPath } from '@/integrations/cursor/install';
import type { DetectContext, HookDetection } from '@/integrations/detect/context';

const cursorDetectionEntrySchema = z.looseObject({
  command: z.json().optional(),
  failClosed: z.json().optional(),
  timeout: z.json().optional(),
});
const cursorDetectionConfigSchema = z.looseObject({
  hooks: z
    .looseObject({
      preToolUse: z.array(z.json()).optional(),
    })
    .optional(),
});
type CursorDetectionEntry = z.infer<typeof cursorDetectionEntrySchema>;

function _findCursorManagedEntries(config: z.infer<typeof cursorDetectionConfigSchema>) {
  const preToolUse = config.hooks?.preToolUse ?? [];

  return preToolUse.flatMap((entry) => {
    const parsed = cursorDetectionEntrySchema.safeParse(entry);
    return parsed.success && parsed.data.command === CURSOR_HOOK_COMMAND ? [parsed.data] : [];
  });
}

function _cursorDriftErrors(entries: CursorDetectionEntry[]): string[] {
  const errors: string[] = [];
  if (entries.length > 1) {
    errors.push('Multiple managed cc-safety-net hooks found; reinstall to collapse duplicates');
  }
  const entry = entries[0];
  if (entry && entry.failClosed !== true) {
    errors.push('Managed hook is missing "failClosed": true; reinstall to repair');
  }
  if (entry && entry.timeout !== 30) {
    errors.push('Managed hook "timeout" is not 30; reinstall to repair');
  }
  return errors;
}

export function detect(context: DetectContext): HookDetection {
  const configPath = getCursorHooksPath(context.homeDir);

  if (!existsSync(configPath)) {
    return { platform: 'cursor', status: 'n/a', configPath };
  }

  let parsed: z.infer<typeof cursorDetectionConfigSchema>;
  try {
    parsed = cursorDetectionConfigSchema.parse(JSON.parse(readFileSync(configPath, 'utf-8')));
  } catch (e) {
    return {
      platform: 'cursor',
      status: 'n/a',
      configPath,
      errors: [
        `Failed to parse Cursor hooks config ${configPath}: ${e instanceof Error ? e.message : String(e)}`,
      ],
    };
  }

  const entries = _findCursorManagedEntries(parsed);
  if (entries.length === 0) {
    return { platform: 'cursor', status: 'n/a', configPath };
  }

  const errors = _cursorDriftErrors(entries);
  return {
    platform: 'cursor',
    status: 'configured',
    method: 'hook config',
    configPath,
    errors: errors.length > 0 ? errors : undefined,
  };
}
