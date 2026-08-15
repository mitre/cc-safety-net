/**
 * Pi hook detection.
 */

import { join } from 'node:path';
import { z } from 'zod';
import {
  type DetectContext,
  type HookDetection,
  readStateFile,
} from '@/integrations/detect/context';

const piPackageSchema = z.union([
  z.string().transform((source) => ({ source, extensions: undefined })),
  z.object({ source: z.string(), extensions: z.array(z.string()).optional() }),
]);
const piSettingsSchema = z.object({ packages: z.array(z.json()) });

export function getPiSettingsPath(homeDir: string): string {
  return join(homeDir, '.pi', 'agent', 'settings.json');
}

export function isPiSafetyNetPackageSource(source: string): boolean {
  return source === 'npm:cc-safety-net' || source.startsWith('npm:cc-safety-net@');
}

/**
 * Detect the Pi package from `settings.json`, where Pi records both the installed package and,
 * through a `-` prefix on a resource entry, which of its extensions the user switched off.
 */
export function detect(context: DetectContext): HookDetection {
  const settingsPath = getPiSettingsPath(context.homeDir);
  const settings = readStateFile(settingsPath);
  if (settings.kind === 'unreadable') return { platform: 'pi', status: 'not-inspected' };
  if (settings.kind === 'missing') return { platform: 'pi', status: 'n/a' };

  const packageRecords = piSettingsSchema.safeParse(settings.value).data?.packages;
  if (!packageRecords) return { platform: 'pi', status: 'n/a' };

  const packages = packageRecords.flatMap((candidate) => {
    const parsed = piPackageSchema.safeParse(candidate);
    return parsed.success ? [parsed.data] : [];
  });

  const entry = packages.find((candidate) => isPiSafetyNetPackageSource(candidate.source));
  if (entry === undefined) return { platform: 'pi', status: 'n/a' };

  const disabled = entry.extensions?.some((resource) => resource.startsWith('-')) ?? false;

  if (disabled) {
    return {
      platform: 'pi',
      status: 'disabled',
      method: 'package config',
      configPath: settingsPath,
      errors: ['npm:cc-safety-net is installed but its extension is disabled in Pi settings'],
    };
  }

  return {
    platform: 'pi',
    status: 'configured',
    method: 'package config',
    configPath: settingsPath,
  };
}
