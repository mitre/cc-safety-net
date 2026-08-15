/**
 * Antigravity CLI hook detection.
 */

import { existsSync, readFileSync } from 'node:fs';
import { z } from 'zod';
import { getAntigravityHooksPath } from '@/integrations/antigravity/hook';
import type { DetectContext, HookDetection } from '@/integrations/detect/context';

const ANTIGRAVITY_HOOK_COMMAND_PATTERN =
  /cc-safety-net\s+hook\s+(?:[^\s]+\s+)*(?:--agy-cli|-ac)(\s|["']|$)/;

const antigravityHookSchema = z.object({ command: z.string() });
const antigravityPreToolUseSchema = z.object({ hooks: z.array(z.json()) });
const antigravityHookDefinitionSchema = z.object({
  enabled: z.json().optional(),
  PreToolUse: z.array(z.json()),
});
const antigravityHooksConfigSchema = z.record(z.string(), z.json());
type AntigravityHooksConfig = z.infer<typeof antigravityHooksConfigSchema>;

function findAntigravitySafetyNetHooks(config: AntigravityHooksConfig) {
  return Object.values(config).flatMap((definition) => {
    const parsedDefinition = antigravityHookDefinitionSchema.safeParse(definition);
    if (!parsedDefinition.success) return [];

    return parsedDefinition.data.PreToolUse.flatMap((entry) => {
      const parsedEntry = antigravityPreToolUseSchema.safeParse(entry);
      if (!parsedEntry.success) return [];
      return parsedEntry.data.hooks.flatMap((hook) => {
        const parsedHook = antigravityHookSchema.safeParse(hook);
        if (
          !parsedHook.success ||
          !ANTIGRAVITY_HOOK_COMMAND_PATTERN.test(parsedHook.data.command)
        ) {
          return [];
        }
        return [
          { command: parsedHook.data.command, enabled: parsedDefinition.data.enabled !== false },
        ];
      });
    });
  });
}

export function detect(context: DetectContext): HookDetection {
  const configPath = getAntigravityHooksPath(context.homeDir);

  if (!existsSync(configPath)) {
    return { platform: 'antigravity-cli', status: 'n/a', configPath };
  }

  let matches: Array<{ enabled: boolean; command: string }>;
  try {
    const config = antigravityHooksConfigSchema.safeParse(
      JSON.parse(readFileSync(configPath, 'utf-8')),
    );
    matches = config.success ? findAntigravitySafetyNetHooks(config.data) : [];
  } catch (e) {
    return {
      platform: 'antigravity-cli',
      status: 'n/a',
      configPath,
      errors: [
        `Failed to parse Antigravity hooks config ${configPath}: ${e instanceof Error ? e.message : String(e)}`,
      ],
    };
  }

  if (matches.some((match) => match.enabled)) {
    return {
      platform: 'antigravity-cli',
      status: 'configured',
      method: 'hook config',
      configPath,
    };
  }

  if (matches.length > 0) {
    return {
      platform: 'antigravity-cli',
      status: 'disabled',
      method: 'hook config',
      configPath,
    };
  }

  return { platform: 'antigravity-cli', status: 'n/a', configPath };
}
