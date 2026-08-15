import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { z } from 'zod';
import { getAntigravityHooksPath } from '@/integrations/antigravity/hook';
import { atomicWriteFile } from '@/integrations/install/atomic-write';
import type { InstallResult } from '@/integrations/install/types';

const ANTIGRAVITY_HOOK_COMMAND = 'npx -y cc-safety-net hook --agy-cli';
const MANAGED_HOOK_NAME = 'cc-safety-net';

const hookHandlerSchema = z.object({ command: z.json().optional() }).catchall(z.json());
const hookHandlersSchema = z.array(hookHandlerSchema);
const preToolUseEntrySchema = z.object({ hooks: z.json().optional() }).catchall(z.json());
const preToolUseSchema = z.array(preToolUseEntrySchema);
const hookDefinitionSchema = z
  .object({
    enabled: z.json().optional(),
    PreToolUse: z.json().optional(),
  })
  .catchall(z.json());
const hooksConfigSchema = z.record(z.string(), z.json());
const commandSchema = z.string();

type AntigravityHookDefinition = z.infer<typeof hookDefinitionSchema>;
type AntigravityHooksConfig = z.infer<typeof hooksConfigSchema>;

function managedHookEntry() {
  return {
    PreToolUse: [
      {
        hooks: [
          {
            type: 'command',
            command: ANTIGRAVITY_HOOK_COMMAND,
            timeout: 30,
          },
        ],
      },
    ],
  };
}

function parseAntigravityHooksConfig(configPath: string): AntigravityHooksConfig {
  try {
    const config = hooksConfigSchema.safeParse(JSON.parse(readFileSync(configPath, 'utf-8')));
    if (!config.success) {
      throw new Error('Antigravity hooks config must be a JSON object');
    }
    return config.data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Failed to parse Antigravity hooks config ${configPath}: ${error.message}`);
    }
    throw error;
  }
}

function getManagedHookDefinition(config: AntigravityHooksConfig): AntigravityHookDefinition {
  const existing = config[MANAGED_HOOK_NAME];
  if (existing === undefined) {
    config[MANAGED_HOOK_NAME] = managedHookEntry();
    return config[MANAGED_HOOK_NAME];
  }

  const parsed = hookDefinitionSchema.safeParse(existing);
  if (!parsed.success) {
    throw new Error(`Antigravity hooks config entry "${MANAGED_HOOK_NAME}" must be an object`);
  }

  const preToolUse = preToolUseSchema.safeParse(parsed.data.PreToolUse);
  parsed.data.PreToolUse = preToolUse.success ? preToolUse.data : [];
  config[MANAGED_HOOK_NAME] = parsed.data;
  return parsed.data;
}

function hasManagedHookCommand(definition: AntigravityHookDefinition): boolean {
  const entries = preToolUseSchema.safeParse(definition.PreToolUse);
  if (!entries.success) return false;

  return entries.data.some((entry) => {
    const hooks = hookHandlersSchema.safeParse(entry.hooks);
    return (
      hooks.success &&
      hooks.data.some(
        (hook) => commandSchema.safeParse(hook.command).data === ANTIGRAVITY_HOOK_COMMAND,
      )
    );
  });
}

function hasActiveManagedHook(config: AntigravityHooksConfig): boolean {
  return Object.values(config).some((value) => {
    const definition = hookDefinitionSchema.safeParse(value);
    return (
      definition.success &&
      definition.data.enabled !== false &&
      hasManagedHookCommand(definition.data)
    );
  });
}

function enableManagedHookDefinition(config: AntigravityHooksConfig): boolean {
  if (config[MANAGED_HOOK_NAME] === undefined) return false;

  const definition = getManagedHookDefinition(config);
  if (definition.enabled !== false || !hasManagedHookCommand(definition)) return false;

  definition.enabled = true;
  return true;
}

function appendManagedHook(config: AntigravityHooksConfig): void {
  if (config[MANAGED_HOOK_NAME] === undefined) {
    config[MANAGED_HOOK_NAME] = managedHookEntry();
    return;
  }

  const definition = getManagedHookDefinition(config);
  const preToolUse = preToolUseSchema.parse(definition.PreToolUse);
  definition.enabled = true;
  preToolUse.push(preToolUseEntrySchema.parse(managedHookEntry().PreToolUse[0]));
  definition.PreToolUse = preToolUse;
}

function removeManagedHook(config: AntigravityHooksConfig): boolean {
  let removed = false;
  Object.entries(config).forEach(([name, value]) => {
    const definition = hookDefinitionSchema.safeParse(value);
    if (!definition.success) return;
    const entries = preToolUseSchema.safeParse(definition.data.PreToolUse);
    if (!entries.success) return;
    definition.data.PreToolUse = entries.data.flatMap((entry) => {
      const parsedHooks = hookHandlersSchema.safeParse(entry.hooks);
      if (!parsedHooks.success) return [entry];

      const hooks = parsedHooks.data.filter(
        (hook) => commandSchema.safeParse(hook.command).data !== ANTIGRAVITY_HOOK_COMMAND,
      );
      if (hooks.length !== parsedHooks.data.length) removed = true;
      return hooks.length === 0 ? [] : [{ ...entry, hooks }];
    });
    config[name] = definition.data;
  });
  return removed;
}

function writeAntigravityHooksConfig(configPath: string, config: AntigravityHooksConfig): void {
  atomicWriteFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
}

export function installAntigravityCli(homeDir: string): InstallResult {
  const configPath = getAntigravityHooksPath(homeDir);
  mkdirSync(dirname(configPath), { recursive: true });

  if (!existsSync(configPath)) {
    writeAntigravityHooksConfig(configPath, { [MANAGED_HOOK_NAME]: managedHookEntry() });
    return { path: configPath, alreadyInstalled: false };
  }

  const config = parseAntigravityHooksConfig(configPath);
  if (hasActiveManagedHook(config)) return { path: configPath, alreadyInstalled: true };
  if (enableManagedHookDefinition(config)) {
    writeAntigravityHooksConfig(configPath, config);
    return { path: configPath, alreadyInstalled: false };
  }

  appendManagedHook(config);
  writeAntigravityHooksConfig(configPath, config);
  return { path: configPath, alreadyInstalled: false };
}

export function uninstallAntigravityCli(homeDir: string): InstallResult {
  const configPath = getAntigravityHooksPath(homeDir);
  if (!existsSync(configPath)) return { path: configPath, alreadyInstalled: false };

  const config = parseAntigravityHooksConfig(configPath);
  const removed = removeManagedHook(config);
  if (!removed) return { path: configPath, alreadyInstalled: false };

  writeAntigravityHooksConfig(configPath, config);
  return { path: configPath, alreadyInstalled: true };
}
