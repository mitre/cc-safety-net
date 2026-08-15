/**
 * Gemini CLI hook detection.
 */

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';
import {
  type DetectContext,
  type HookDetection,
  readStateFile,
} from '@/integrations/detect/context';

const GEMINI_SAFETY_NET_EXTENSION = 'gemini-safety-net';
const geminiEnablementSchema = z.record(
  z.string(),
  z.object({ overrides: z.array(z.string()).optional() }),
);

/**
 * Detect the Gemini extension from its installed directory and the enablement file Gemini CLI
 * keeps beside it. A `!`-prefixed override is how Gemini records "disabled for this scope".
 */
export function detectGeminiCLI(homeDir: string): HookDetection {
  const extensionsDir = join(homeDir, '.gemini', 'extensions');
  const extensionDir = join(extensionsDir, GEMINI_SAFETY_NET_EXTENSION);
  if (!existsSync(extensionDir)) return { platform: 'gemini-cli', status: 'n/a' };

  const enablementPath = join(extensionsDir, 'extension-enablement.json');
  const enablement = readStateFile(enablementPath);
  if (enablement.kind === 'unreadable') return { platform: 'gemini-cli', status: 'not-inspected' };

  const overrides =
    enablement.kind === 'ok'
      ? geminiEnablementSchema.safeParse(enablement.value).data?.[GEMINI_SAFETY_NET_EXTENSION]
          ?.overrides
      : undefined;
  const disabled = overrides?.some((entry) => entry.startsWith('!')) ?? false;

  if (disabled) {
    return {
      platform: 'gemini-cli',
      status: 'disabled',
      method: 'extension config',
      configPath: enablementPath,
      errors: [`${GEMINI_SAFETY_NET_EXTENSION} is disabled in Gemini CLI`],
    };
  }

  return {
    platform: 'gemini-cli',
    status: 'configured',
    method: 'extension config',
    configPath: extensionDir,
  };
}

export function detect(context: DetectContext): HookDetection {
  return detectGeminiCLI(context.homeDir);
}
