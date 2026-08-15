import { chmodSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { z } from 'zod';
import { processHomeDir } from '@/ir/environment';
import { getDestructiveAllowPathError, getSecretDenyPathError } from '@/policy/allow-paths';
import { getCCSafetyNetEnvModes } from '@/policy/env';
import { getUserPolicyDiagnostics } from '@/policy/schema';
import {
  DESTRUCTIVE_COMMAND_RULE_ID_SET,
  resolveEffectiveDestructiveCommandRules,
} from '@/rules/destructive-command-rules';
import {
  SECRET_DEFAULT_OFF_RULE_ID_SET,
  SECRET_PROTECTION_RULE_ID_SET,
} from '@/rules/secret-protection-rules';

export { DESTRUCTIVE_COMMAND_RULE_METADATA } from '@/rules/destructive-command-rules';
export { SECRET_PROTECTION_RULE_METADATA } from '@/rules/secret-protection-rules';

import type {
  DestructiveCommandRuleOverride,
  EffectiveDestructiveCommandRuleState,
  EffectiveSafetyCapabilities,
  PolicySafety,
  PolicySafetyLevel,
  SecretProtectionConfig,
} from '@/ir/policy';
import {
  clampAuditRetentionDays,
  DEFAULT_AUDIT_RETENTION_DAYS,
} from '@/policy/audit-retention-days';
import { writeJsonAtomic } from '@/rules/policy/config-file';
import { getUserRulesDir, POLICY_FILE } from '@/rules/policy/paths';
import type { RulesPolicyOptions } from '@/rules/policy/types';

const JsonValueSchema = z.json();
export type JsonValue = z.output<typeof JsonValueSchema>;

declare global {
  var __CC_SAFETY_NET_EMBEDDED_POLICY__: JsonValue | undefined;
}

/**
 * Which protective fallback backs an unreadable policy file: `salvaged` keeps
 * every recognized valid section from readable JSON, `defaults` replaces the
 * whole file because nothing salvageable parsed.
 */
type PolicyFallback = 'salvaged' | 'defaults';

type PolicyConfig = {
  safety: PolicySafety;
  worktreeMode: boolean;
  destructiveCommandProtectionEnabled: boolean;
  destructiveCommandRuleOverrides: Readonly<Record<string, DestructiveCommandRuleOverride>>;
  destructiveCommandAllowPaths: string[];
  secretProtection: SecretProtectionConfig;
  errors: string[];
  fallback?: PolicyFallback;
};

type PartialPolicy = {
  safety: PolicySafety;
  worktreeMode: boolean;
  destructiveCommandProtectionEnabled: boolean;
  destructiveCommandRuleOverrides: Record<string, DestructiveCommandRuleOverride>;
  destructiveCommandAllowPaths: string[];
  secretProtection: SecretProtectionConfig;
};

type PolicyReadResult = {
  policy: PartialPolicy;
  errors: string[];
  fallback?: PolicyFallback;
};

export type GuiPolicy = {
  version: 1;
  safety: {
    level: PolicySafetyLevel;
    overrides: {
      fail_closed?: boolean;
      paranoid_rm?: boolean;
      paranoid_interpreters?: boolean;
    };
  };
  workflow: {
    worktree_mode: boolean;
  };
  destructive_command_protection: {
    enabled: boolean;
    overrides: Record<string, DestructiveCommandRuleOverride>;
    allow_paths: string[];
  };
  secret_protection: {
    enabled: boolean;
    overrides: Record<string, 'on' | 'off'>;
    deny_paths: string[];
  };
  audit: {
    retention_days: number;
  };
};

export const DEFAULT_GUI_POLICY: GuiPolicy = {
  version: 1,
  safety: {
    level: 'standard',
    overrides: {},
  },
  workflow: {
    worktree_mode: false,
  },
  destructive_command_protection: {
    enabled: true,
    overrides: {},
    allow_paths: [],
  },
  secret_protection: {
    enabled: true,
    overrides: {},
    deny_paths: [],
  },
  audit: {
    retention_days: DEFAULT_AUDIT_RETENTION_DAYS,
  },
};

export interface GuiPolicyReadResult {
  path: string;
  exists: boolean;
  raw: string;
  policy: GuiPolicy;
  errors: string[];
}

export interface GuiPolicyWriteResult {
  path: string;
  policy: GuiPolicy;
  errors: string[];
}

export interface PolicyPreview {
  selectedPreset: PolicySafetyLevel;
  effectiveLevel: ReturnType<typeof getCCSafetyNetEnvModes>['effectiveLevel'];
  capabilities: EffectiveSafetyCapabilities;
  rules: Readonly<Record<string, EffectiveDestructiveCommandRuleState>>;
  counts: {
    enabled: number;
    disabled: number;
    explicitOn: number;
    explicitOff: number;
    effectiveCustomizations: number;
    inheritedRequiresStrict: number;
    inheritedRequiresParanoid: number;
  };
}

export function getUserPolicyPath(options?: RulesPolicyOptions): string {
  return join(dirname(getUserRulesDir(options)), POLICY_FILE);
}

export function readUserPolicyForGui(options: RulesPolicyOptions = {}): GuiPolicyReadResult {
  const path = getUserPolicyPath(options);
  if (!existsSync(path)) {
    return {
      path,
      exists: false,
      raw: '',
      policy: createDefaultGuiPolicy(),
      errors: [],
    };
  }

  const raw = readFileSync(path, 'utf-8');
  if (!raw.trim()) {
    return {
      path,
      exists: true,
      raw,
      policy: createDefaultGuiPolicy(),
      errors: ['Config file is empty'],
    };
  }

  try {
    const parsed = JsonValueSchema.parse(JSON.parse(raw));
    const errors = getUserPolicyDiagnostics(parsed);
    return {
      path,
      exists: true,
      raw,
      policy: errors.length > 0 ? createDefaultGuiPolicy() : normalizeGuiPolicy(parsed),
      errors,
    };
  } catch (error) {
    return {
      path,
      exists: true,
      raw,
      policy: createDefaultGuiPolicy(),
      errors: [`Invalid JSON: ${error instanceof Error ? error.message : String(error)}`],
    };
  }
}

export function writeUserPolicyFromGui(
  policy: JsonValue,
  options: RulesPolicyOptions = {},
): GuiPolicyWriteResult {
  const path = getUserPolicyPath(options);
  const errors = getUserPolicyDiagnostics(policy);
  const normalizedPolicy =
    errors.length > 0 ? createDefaultGuiPolicy() : normalizeGuiPolicy(policy);
  if (errors.length > 0) {
    return { path, policy: normalizedPolicy, errors };
  }

  mkdirSync(dirname(path), { recursive: true, mode: 0o700 });
  writeJsonAtomic(path, normalizedPolicy, 0o600);
  chmodSync(path, 0o600);
  return { path, policy: normalizedPolicy, errors: [] };
}

export function previewUserPolicyForGui(policy: JsonValue) {
  const errors = getUserPolicyDiagnostics(policy);
  if (errors.length > 0) return { errors };
  return { preview: createPolicyPreview(normalizeGuiPolicy(policy)), errors: [] };
}

export function createPolicyPreview(policy: GuiPolicy): PolicyPreview {
  const modes = getCCSafetyNetEnvModes({ safety: normalizeSafety(policy.safety) });
  const rules = resolveEffectiveDestructiveCommandRules(
    {
      destructiveCommandProtectionEnabled: policy.destructive_command_protection.enabled,
      destructiveCommandRuleOverrides: policy.destructive_command_protection.overrides,
    },
    modes.capabilities,
  );
  const values = Object.values(rules);
  // Catastrophic rules are always enforced and not user-configurable, so they are surfaced
  // separately in the GUI and excluded from the configurable active/disabled tallies.
  const configurableValues = values.filter((state) => state.source !== 'catastrophic');
  const overrides = Object.values(policy.destructive_command_protection.overrides);
  return {
    selectedPreset: policy.safety.level,
    effectiveLevel: modes.effectiveLevel,
    capabilities: modes.capabilities,
    rules,
    counts: {
      enabled: configurableValues.filter((state) => state.enabled).length,
      disabled: configurableValues.filter((state) => !state.enabled).length,
      explicitOn: overrides.filter((value) => value === 'on').length,
      explicitOff: overrides.filter((value) => value === 'off').length,
      effectiveCustomizations: values.filter((state) => state.changesInherited).length,
      inheritedRequiresStrict: values.filter(
        (state) =>
          !state.enabled && !state.override && state.activationCapability === 'fail_closed',
      ).length,
      inheritedRequiresParanoid: values.filter(
        (state) =>
          !state.enabled &&
          !state.override &&
          (state.activationCapability === 'paranoid_rm' ||
            state.activationCapability === 'paranoid_interpreters'),
      ).length,
    },
  };
}

export function repairUserPolicyForGui(options: RulesPolicyOptions = {}): GuiPolicyWriteResult {
  const path = getUserPolicyPath(options);
  if (!existsSync(path)) return writeUserPolicyFromGui(DEFAULT_GUI_POLICY, options);

  const raw = readFileSync(path, 'utf-8');
  if (!raw.trim()) return writeUserPolicyFromGui(DEFAULT_GUI_POLICY, options);

  try {
    return writeUserPolicyFromGui(
      normalizeGuiPolicy(JsonValueSchema.parse(JSON.parse(raw))),
      options,
    );
  } catch {
    return writeUserPolicyFromGui(DEFAULT_GUI_POLICY, options);
  }
}

export function loadPolicyConfig(options: RulesPolicyOptions = {}): PolicyConfig {
  const user = readPolicyConfig(getUserPolicyPath(options));
  const config: PolicyConfig = {
    safety: user.policy.safety,
    worktreeMode: user.policy.worktreeMode,
    destructiveCommandProtectionEnabled: user.policy.destructiveCommandProtectionEnabled,
    destructiveCommandRuleOverrides: { ...user.policy.destructiveCommandRuleOverrides },
    destructiveCommandAllowPaths: [...user.policy.destructiveCommandAllowPaths],
    secretProtection: user.policy.secretProtection,
    errors: user.errors,
  };
  if (user.fallback) config.fallback = user.fallback;
  return config;
}

/**
 * The single normalizer from untrusted JSON to the canonical policy-file shape.
 * Schema-valid input passes through unchanged (every field satisfies the per-field
 * checks); invalid input keeps each recognized valid field and substitutes a
 * protective default for the rest.
 */
export function normalizeGuiPolicy(value: JsonValue): GuiPolicy {
  if (!isRecord(value)) return createDefaultGuiPolicy();

  const safety = isRecord(value.safety) ? value.safety : {};
  const safetyOverrides = isRecord(safety.overrides) ? safety.overrides : {};
  const workflow = isRecord(value.workflow) ? value.workflow : {};
  const destructiveCommand = isRecord(value.destructive_command_protection)
    ? value.destructive_command_protection
    : {};
  const secret = isRecord(value.secret_protection) ? value.secret_protection : {};
  const overrides: GuiPolicy['safety']['overrides'] = {};
  if (isBoolean(safetyOverrides.fail_closed)) overrides.fail_closed = safetyOverrides.fail_closed;
  if (isBoolean(safetyOverrides.paranoid_rm)) overrides.paranoid_rm = safetyOverrides.paranoid_rm;
  if (isBoolean(safetyOverrides.paranoid_interpreters)) {
    overrides.paranoid_interpreters = safetyOverrides.paranoid_interpreters;
  }
  return {
    version: 1,
    safety: {
      level: normalizeSafetyLevel(safety.level),
      overrides,
    },
    workflow: {
      worktree_mode: isBoolean(workflow.worktree_mode) ? workflow.worktree_mode : false,
    },
    destructive_command_protection: {
      enabled: isBoolean(destructiveCommand.enabled) ? destructiveCommand.enabled : true,
      overrides: repairRuleOverrides(destructiveCommand.overrides, DESTRUCTIVE_COMMAND_RULE_ID_SET),
      allow_paths: repairAllowPaths(destructiveCommand.allow_paths),
    },
    secret_protection: {
      enabled: isBoolean(secret.enabled) ? secret.enabled : true,
      overrides: repairRuleOverrides(secret.overrides, SECRET_PROTECTION_RULE_ID_SET),
      deny_paths: repairDenyPaths(secret.deny_paths),
    },
    audit: {
      retention_days: clampAuditRetentionDays(
        isRecord(value.audit) && isNumber(value.audit.retention_days)
          ? value.audit.retention_days
          : undefined,
      ),
    },
  };
}

function repairRuleOverrides(
  value: JsonValue | undefined,
  knownRuleIds: ReadonlySet<string>,
): Record<string, DestructiveCommandRuleOverride> {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).flatMap(([id, override]) =>
      knownRuleIds.has(id) && (override === 'on' || override === 'off') ? [[id, override]] : [],
    ),
  );
}

function repairDenyPaths(value: JsonValue | undefined): string[] {
  if (!Array.isArray(value)) return [];
  const home = processHomeDir();
  return value.filter(isString).filter((path) => getSecretDenyPathError(path, home) === null);
}

function repairAllowPaths(value: JsonValue | undefined): string[] {
  if (!Array.isArray(value)) return [];
  const home = processHomeDir();
  return value.filter(isString).filter((path) => getDestructiveAllowPathError(path, home) === null);
}

function isRecord(value: JsonValue | undefined): value is { [key: string]: JsonValue } {
  return value !== undefined && value !== null && value === Object(value) && !Array.isArray(value);
}

function isBoolean(value: JsonValue | undefined): value is boolean {
  return value === true || value === false;
}

function isNumber(value: JsonValue | undefined): value is number {
  return Number.isFinite(value);
}

function isString(value: JsonValue): value is string {
  return value !== Object(value) && Object.prototype.toString.call(value) === '[object String]';
}

function normalizeSafetyLevel(value: JsonValue | undefined): PolicySafetyLevel {
  if (value === 'strict') return value;
  if (value === 'paranoid') return value;
  return 'standard';
}

// Callers mutate the result, so every call needs its own containers rather than
// references into the shared DEFAULT_GUI_POLICY.
function createDefaultGuiPolicy(): GuiPolicy {
  return structuredClone(DEFAULT_GUI_POLICY);
}

function readPolicyConfig(path: string): PolicyReadResult {
  const empty = createEmptyPolicy();
  if (!existsSync(path)) {
    // A machine with no policy file of its own — an Amp Orb — reads the snapshot that
    // `install --amp` stamped onto the published plugin artifact, normalized here exactly
    // like file contents would be, so home-relative paths resolve against this machine.
    // No diagnostics are computed for it: the snapshot is not an editable file the user can
    // fix here, so a malformed one degrades to protective defaults instead of reporting.
    const embedded = JsonValueSchema.safeParse(globalThis.__CC_SAFETY_NET_EMBEDDED_POLICY__);
    if (!embedded.success || !isRecord(embedded.data)) return { policy: empty, errors: [] };
    return { policy: normalizePolicyConfig(normalizeGuiPolicy(embedded.data)), errors: [] };
  }

  try {
    const content = readFileSync(path, 'utf-8');
    if (!content.trim()) {
      return { policy: empty, errors: [`${path}: Config file is empty`], fallback: 'defaults' };
    }
    const parsed = JsonValueSchema.parse(JSON.parse(content));
    const errors = getUserPolicyDiagnostics(parsed);
    // Field-level normalization keeps every recognized valid section active and
    // substitutes protective defaults for the rest, so one bad field cannot
    // drop protections the rest of the file still configures.
    const policy = normalizePolicyConfig(normalizeGuiPolicy(parsed));
    if (errors.length > 0)
      return {
        policy,
        errors: errors.map((error) => `${path}: ${error}`),
        fallback: isRecord(parsed) ? 'salvaged' : 'defaults',
      };
    return { policy, errors: [] };
  } catch (error) {
    // Only a parse failure means malformed JSON; every other failure names itself.
    const message = error instanceof Error ? error.message : String(error);
    return {
      policy: empty,
      errors: [`${path}: ${error instanceof SyntaxError ? 'Invalid JSON' : message}`],
      fallback: 'defaults',
    };
  }
}

// A rule in the default-off tier stays off until an explicit 'on' override opts into it.
export function resolveSecretDisabledRules(overrides: Record<string, 'on' | 'off'>): Set<string> {
  const entries = Object.entries(overrides);
  const optedIn = new Set(entries.flatMap(([id, value]) => (value === 'on' ? [id] : [])));
  return new Set([
    ...[...SECRET_DEFAULT_OFF_RULE_ID_SET].filter((id) => !optedIn.has(id)),
    ...entries.flatMap(([id, value]) => (value === 'off' ? [id] : [])),
  ]);
}

function createEmptyPolicy(): PartialPolicy {
  return {
    safety: {},
    worktreeMode: false,
    destructiveCommandProtectionEnabled: true,
    destructiveCommandRuleOverrides: {},
    destructiveCommandAllowPaths: [],
    secretProtection: {
      enabled: true,
      disabledRules: resolveSecretDisabledRules({}),
      denyPaths: [],
    },
  };
}

// Projects the canonical policy-file shape onto the camelCase runtime policy.
function normalizePolicyConfig(config: GuiPolicy): PartialPolicy {
  return {
    safety: normalizeSafety(config.safety),
    worktreeMode: config.workflow.worktree_mode,
    destructiveCommandProtectionEnabled: config.destructive_command_protection.enabled,
    destructiveCommandRuleOverrides: { ...config.destructive_command_protection.overrides },
    destructiveCommandAllowPaths: [...config.destructive_command_protection.allow_paths],
    secretProtection: {
      enabled: config.secret_protection.enabled,
      disabledRules: resolveSecretDisabledRules(config.secret_protection.overrides),
      denyPaths: [...config.secret_protection.deny_paths],
    },
  };
}

export function normalizeSafety(safety: GuiPolicy['safety']): PolicySafety {
  return {
    level: safety.level,
    overrides: {
      failClosed: safety.overrides.fail_closed,
      paranoidRm: safety.overrides.paranoid_rm,
      paranoidInterpreters: safety.overrides.paranoid_interpreters,
    },
  };
}
