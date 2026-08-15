#!/usr/bin/env bun

import { accessSync, constants, readFileSync, statSync } from 'node:fs';
import { z } from 'zod';

const versionManifestSchema = z.object({ version: z.string() });
const claudeHooksSchema = z.object({
  hooks: z.object({
    PreToolUse: z.array(z.object({ hooks: z.array(z.object({ command: z.string() })) })),
  }),
});
const kimiManifestSchema = z.object({
  version: z.string(),
  hooks: z.array(
    z.object({
      event: z.string(),
      matcher: z.string(),
      command: z.string(),
      timeout: z.number(),
    }),
  ),
});

function run(command: string[]) {
  const result = Bun.spawnSync(command, { stdout: 'pipe', stderr: 'pipe' });
  if (result.exitCode === 0) return;
  throw new Error(`${command.join(' ')} failed\n${result.stdout}${result.stderr}`);
}

export function verifyRepositoryPlugin(): void {
  const pkg = versionManifestSchema.parse(JSON.parse(readFileSync('package.json', 'utf8')));
  const plugin = versionManifestSchema.parse(
    JSON.parse(readFileSync('.claude-plugin/plugin.json', 'utf8')),
  );
  if (pkg.version !== plugin.version) throw new Error('Package and plugin versions disagree');
  const hooks = claudeHooksSchema.parse(JSON.parse(readFileSync('hooks/hooks.json', 'utf8')));
  const command = hooks.hooks.PreToolUse[0]?.hooks[0]?.command;
  if (command !== 'node "${CLAUDE_PLUGIN_ROOT}/dist/bin/cc-safety-net.js" hook --coding-cli') {
    throw new Error('Claude plugin hook target drifted');
  }
  const kimi = kimiManifestSchema.parse(JSON.parse(readFileSync('kimi.plugin.json', 'utf8')));
  if (pkg.version !== kimi.version) throw new Error('Package and Kimi plugin versions disagree');
  const kimiHook = kimi.hooks[0];
  if (
    kimi.hooks.length !== 1 ||
    kimiHook?.event !== 'PreToolUse' ||
    kimiHook.matcher !== 'Bash' ||
    kimiHook.command !== 'node ./dist/bin/cc-safety-net.js hook --kimi-code' ||
    kimiHook.timeout !== 30
  ) {
    throw new Error('Kimi plugin hook target drifted');
  }
  accessSync('dist/bin/cc-safety-net.js', constants.X_OK);
  accessSync('dist/index.js', constants.R_OK);
  if ((statSync('dist/bin/cc-safety-net.js').mode & 0o111) === 0) {
    throw new Error('Repository plugin CLI is not executable');
  }
  run(['node', '--check', 'dist/bin/cc-safety-net.js']);
  run(['git', 'ls-files', '--error-unmatch', 'assets/cc-safety-net.schema.json']);
  run(['git', 'ls-files', '--error-unmatch', '.claude-plugin/plugin.json']);
  run(['git', 'ls-files', '--error-unmatch', 'hooks/hooks.json']);
  run(['git', 'ls-files', '--error-unmatch', 'kimi.plugin.json']);
  console.log(`Verified repository plugin v${pkg.version}`);
}

if (import.meta.main) verifyRepositoryPlugin();
