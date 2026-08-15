import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { z } from 'zod';
import { atomicWriteFile } from '@/integrations/install/atomic-write';
import type { InstallResult } from '@/integrations/install/types';

export const CURSOR_HOOK_COMMAND = 'npx -y cc-safety-net hook --cursor';
const CURSOR_HOOK_TIMEOUT = 30;

const cursorEntrySchema = z.looseObject({
  command: z.json().optional(),
  timeout: z.json().optional(),
  failClosed: z.json().optional(),
});
const cursorHooksObjectSchema = z.looseObject({ preToolUse: z.json().optional() });
const cursorHooksSchema = z.looseObject({ preToolUse: z.array(z.json()).optional() });
const cursorHooksConfigSchema = z.looseObject({
  version: z.json().optional(),
  hooks: z.json().optional(),
});
type CursorEntry = z.infer<z.ZodJSONSchema>;
type CursorHooksConfig = z.infer<typeof cursorHooksConfigSchema>;

export function getCursorHooksPath(homeDir: string): string {
  return join(homeDir, '.cursor', 'hooks.json');
}

function canonicalCursorEntry() {
  return { command: CURSOR_HOOK_COMMAND, timeout: CURSOR_HOOK_TIMEOUT, failClosed: true };
}

function isManagedCursorEntry(entry: z.infer<typeof cursorEntrySchema>): boolean {
  return entry.command === CURSOR_HOOK_COMMAND;
}

function isCanonicalCursorEntry(entry: CursorEntry): boolean {
  const parsed = cursorEntrySchema.safeParse(entry);
  if (!parsed.success) return false;
  return (
    Object.keys(parsed.data).length === 3 &&
    parsed.data.command === CURSOR_HOOK_COMMAND &&
    parsed.data.timeout === CURSOR_HOOK_TIMEOUT &&
    parsed.data.failClosed === true
  );
}

function readCursorJson(configPath: string) {
  try {
    return z.json().parse(JSON.parse(readFileSync(configPath, 'utf-8')));
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Failed to parse Cursor hooks config ${configPath}: ${error.message}`);
    }
    throw error;
  }
}

function parseCursorHooksConfig(configPath: string): CursorHooksConfig {
  const parsed = readCursorJson(configPath);
  const config = cursorHooksConfigSchema.safeParse(parsed);
  if (!config.success) throw new Error(`Cursor hooks config ${configPath} must be a JSON object`);
  if (config.data.version !== 1)
    throw new Error(`Cursor hooks config ${configPath} must set "version": 1`);
  const hooks = cursorHooksObjectSchema.safeParse(config.data.hooks);
  if (config.data.hooks !== undefined && !hooks.success)
    throw new Error(`Cursor hooks config ${configPath} "hooks" must be an object`);
  if (hooks.success && hooks.data.preToolUse !== undefined) {
    const preToolUse = z.array(z.json()).safeParse(hooks.data.preToolUse);
    if (!preToolUse.success)
      throw new Error(`Cursor hooks config ${configPath} "hooks.preToolUse" must be an array`);
  }

  return config.data;
}

function getCursorPreToolUse(config: CursorHooksConfig): CursorEntry[] {
  const hooks = cursorHooksSchema.safeParse(config.hooks);
  if (!hooks.success || hooks.data.preToolUse === undefined) return [];
  return hooks.data.preToolUse;
}

function canonicalizeCursorEntries(entries: readonly CursorEntry[]) {
  const isManaged = (entry: CursorEntry) => {
    const parsed = cursorEntrySchema.safeParse(entry);
    return parsed.success && isManagedCursorEntry(parsed.data);
  };
  if (!entries.some(isManaged)) return [...entries, canonicalCursorEntry()];

  return entries.reduce<{ result: CursorEntry[]; inserted: boolean }>(
    (state, entry) => {
      if (!isManaged(entry)) {
        state.result.push(entry);
        return state;
      }
      if (!state.inserted) {
        state.result.push(canonicalCursorEntry());
        state.inserted = true;
      }
      return state;
    },
    { result: [], inserted: false },
  ).result;
}

function writeCursorHooksConfig(
  configPath: string,
  config: CursorHooksConfig,
  preToolUse: CursorEntry[],
): void {
  const parsedHooks = cursorHooksSchema.safeParse(config.hooks);
  const hooks = parsedHooks.success ? parsedHooks.data : {};
  const next = { ...config, hooks: { ...hooks, preToolUse } };
  atomicWriteFile(configPath, `${JSON.stringify(next, null, 2)}\n`);
}

export function installCursor(homeDir: string): InstallResult {
  const configPath = getCursorHooksPath(homeDir);

  if (!existsSync(configPath)) {
    mkdirSync(dirname(configPath), { recursive: true });
    atomicWriteFile(
      configPath,
      `${JSON.stringify({ version: 1, hooks: { preToolUse: [canonicalCursorEntry()] } }, null, 2)}\n`,
    );
    return { path: configPath, alreadyInstalled: false };
  }

  const config = parseCursorHooksConfig(configPath);
  const existing = getCursorPreToolUse(config);
  const managed = existing.filter((entry) => {
    const parsed = cursorEntrySchema.safeParse(entry);
    return parsed.success && isManagedCursorEntry(parsed.data);
  });
  const canonicalInPlace =
    cursorHooksSchema.safeParse(config.hooks).success &&
    managed.length === 1 &&
    managed[0] !== undefined &&
    isCanonicalCursorEntry(managed[0]);
  if (canonicalInPlace) return { path: configPath, alreadyInstalled: true };

  writeCursorHooksConfig(configPath, config, canonicalizeCursorEntries(existing));
  return { path: configPath, alreadyInstalled: false };
}

export function uninstallCursor(homeDir: string): InstallResult {
  const configPath = getCursorHooksPath(homeDir);
  if (!existsSync(configPath)) return { path: configPath, alreadyInstalled: false };

  const config = parseCursorHooksConfig(configPath);
  const existing = getCursorPreToolUse(config);
  const filtered = existing.filter((entry) => {
    const parsed = cursorEntrySchema.safeParse(entry);
    return !parsed.success || !isManagedCursorEntry(parsed.data);
  });
  if (filtered.length === existing.length) return { path: configPath, alreadyInstalled: false };

  writeCursorHooksConfig(configPath, config, filtered);
  return { path: configPath, alreadyInstalled: true };
}
