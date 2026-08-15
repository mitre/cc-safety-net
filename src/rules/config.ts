import { resolve } from 'node:path';
import { z } from 'zod';
import type { CustomRule } from '@/ir/policy';
import {
  collectCustomRuleNames,
  formatSchemaIssues,
  getLegacyConfigSchema,
  type UnparsedValue,
} from '@/policy/schema';
import { validateRulesConfig } from './policy/config-file';
import {
  bindDelegatedPolicyFilesystemTarget,
  isPolicyFilesystemTarget,
  type PolicyFilesystemTarget,
  readPolicyFile,
} from './policy/filesystem';

/** Result of config validation */
export interface ValidationResult {
  /** List of validation error messages */
  errors: string[];
  /** Set of rule names found (for duplicate detection) */
  ruleNames: Set<string>;
}

type LegacyRulesConfigResult =
  | { ok: true; config: { version: 1; rules: CustomRule[] } }
  | { ok: false; errors: string[] };

export function parseLegacyRulesConfig(config: UnparsedValue): LegacyRulesConfigResult {
  const parsed = getLegacyConfigSchema().safeParse(config);
  if (!parsed.success) return { ok: false, errors: formatSchemaIssues(parsed.error.issues) };
  return { ok: true, config: { version: 1, rules: parsed.data.rules ?? [] } };
}

/** @internal */
export function validateConfig(config: UnparsedValue): ValidationResult {
  const parsed = parseLegacyRulesConfig(config);
  return {
    errors: parsed.ok ? [] : parsed.errors,
    ruleNames: new Set(collectCustomRuleNames(config).map((name) => name.toLowerCase())),
  };
}

export function validateConfigFile(path: string | PolicyFilesystemTarget): ValidationResult {
  const loaded = readConfigFileInput(path);
  if (!loaded.ok) return loaded.result;
  return validateConfig(loaded.parsed);
}

type ConfigFileInput = { ok: true; parsed: unknown } | { ok: false; result: ValidationResult };

function readConfigFileInput(path: string | PolicyFilesystemTarget): ConfigFileInput {
  try {
    return readConfigFileTarget(
      isPolicyFilesystemTarget(path) ? path : bindDelegatedPolicyFilesystemTarget(path),
    );
  } catch (error) {
    // Only a parse failure means malformed JSON; every other failure names itself.
    const message = error instanceof Error ? error.message : String(error);
    return configFileFailure(error instanceof SyntaxError ? 'Invalid JSON' : message);
  }
}

function readConfigFileTarget(target: PolicyFilesystemTarget): ConfigFileInput {
  try {
    const content = readPolicyFile(target);
    if (content === null) {
      return configFileFailure(`File not found: ${target.path}`);
    }
    if (!content.trim()) {
      return configFileFailure('Config file is empty');
    }

    return { ok: true, parsed: z.json().parse(JSON.parse(content)) };
  } catch (error) {
    // Only a parse failure means malformed JSON; every other failure names itself.
    const message = error instanceof Error ? error.message : String(error);
    return configFileFailure(error instanceof SyntaxError ? 'Invalid JSON' : message);
  }
}

function configFileFailure(message: string): ConfigFileInput {
  return { ok: false, result: { errors: [message], ruleNames: new Set() } };
}

export function getLegacyProjectConfigPath(cwd?: string): string {
  return resolve(cwd ?? process.cwd(), '.safety-net.json');
}

export function validateRulesConfigFile(path: string | PolicyFilesystemTarget): ValidationResult {
  const loaded = readConfigFileInput(path);
  if (!loaded.ok) return loaded.result;
  const result = validateRulesConfig(loaded.parsed);
  return { errors: result.errors, ruleNames: result.sources };
}
