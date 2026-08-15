/**
 * Claude Code hook detection.
 */

import { join } from 'node:path';
import { z } from 'zod';
import {
  type DetectContext,
  type HookDetection,
  readStateFile,
  type StateFileValue,
} from '@/integrations/detect/context';

const CLAUDE_SAFETY_NET_PLUGIN_ID = 'cc-safety-net@cc-marketplace';
const claudeInstalledPluginsSchema = z.object({ plugins: z.record(z.string(), z.array(z.json())) });
const claudeSettingsSchema = z.object({ enabledPlugins: z.record(z.string(), z.boolean()) });

function getClaudeInstalledPluginsPath(homeDir: string): string {
  return join(homeDir, '.claude', 'plugins', 'installed_plugins.json');
}

function isInstalledPluginRecord(value: StateFileValue, pluginId: string): boolean {
  const plugins = claudeInstalledPluginsSchema.safeParse(value).data?.plugins;
  return (plugins?.[pluginId]?.length ?? 0) > 0;
}

/** Whether Claude Code records the given plugin id as installed. */
export function hasClaudeInstalledPlugin(homeDir: string, pluginId: string): boolean {
  const installed = readStateFile(getClaudeInstalledPluginsPath(homeDir));
  return installed.kind === 'ok' && isInstalledPluginRecord(installed.value, pluginId);
}

/**
 * Detect Claude Code hook configuration from the plugin records Claude Code writes:
 * `installed_plugins.json` says what is installed, `settings.json` says what is on. Reading
 * them avoids `claude plugin list`, which rewrites `~/.claude.json` in a possibly running session.
 */
export function detectClaudeCode(homeDir: string): HookDetection {
  const installedPath = getClaudeInstalledPluginsPath(homeDir);
  const installed = readStateFile(installedPath);
  if (installed.kind === 'unreadable') return { platform: 'claude-code', status: 'not-inspected' };
  if (installed.kind === 'missing') return { platform: 'claude-code', status: 'n/a' };
  if (!isInstalledPluginRecord(installed.value, CLAUDE_SAFETY_NET_PLUGIN_ID)) {
    return { platform: 'claude-code', status: 'n/a' };
  }

  const settingsPath = join(homeDir, '.claude', 'settings.json');
  const settings = readStateFile(settingsPath);
  if (settings.kind === 'unreadable') return { platform: 'claude-code', status: 'not-inspected' };

  const enabled =
    settings.kind === 'ok' &&
    claudeSettingsSchema.safeParse(settings.value).data?.enabledPlugins[
      CLAUDE_SAFETY_NET_PLUGIN_ID
    ] === true;

  if (!enabled) {
    return {
      platform: 'claude-code',
      status: 'disabled',
      method: 'plugin config',
      configPath: settingsPath,
      errors: [`${CLAUDE_SAFETY_NET_PLUGIN_ID} is installed but not enabled in Claude Code`],
    };
  }

  return {
    platform: 'claude-code',
    status: 'configured',
    method: 'plugin config',
    configPath: installedPath,
  };
}

export function detect(context: DetectContext): HookDetection {
  return detectClaudeCode(context.homeDir);
}
