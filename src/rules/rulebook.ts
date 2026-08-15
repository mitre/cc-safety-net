import { z } from 'zod';
import {
  collectCustomRuleNames,
  formatSchemaIssues,
  getRulebookSchema,
  type UnparsedValue,
} from '@/policy/schema';
import type { ValidationResult } from '@/rules/config';
import {
  isRulebookWithinAcceptanceLimits,
  RULEBOOK_LIMIT_ERROR,
  RULEBOOK_LIMITS,
  RULEBOOK_VALIDATION_TRUNCATED,
} from '@/rules/rulebook-limits';
import type { Rulebook } from '@/rules/rulebook-types';

export type { Rulebook } from '@/rules/rulebook-types';

/** @internal - exported for test coverage */
export function validateRulebook(rulebook: UnparsedValue): ValidationResult {
  const record = z
    .looseObject({
      allowed_commands: z.unknown().optional(),
      author: z.unknown().optional(),
      description: z.unknown().optional(),
      migrated_from: z.unknown().optional(),
      name: z.unknown().optional(),
      rulebook_version: z.unknown().optional(),
      rules: z.unknown().optional(),
      tests: z.unknown().optional(),
      version: z.unknown().optional(),
    })
    .safeParse(rulebook);
  if (!record.success) {
    return { errors: ['Rulebook must be an object'], ruleNames: new Set() };
  }
  if (!isRulebookWithinAcceptanceLimits(record.data)) {
    return { errors: [RULEBOOK_LIMIT_ERROR], ruleNames: new Set() };
  }
  const parsed = getRulebookSchema().safeParse(rulebook);
  const errors = [
    // The only rulebook diagnostic that reads as a sentence; the rest are `field: reason`.
    ...(record.data.rulebook_version === 1 ? [] : ['rulebook_version must be 1']),
    ...(parsed.success ? [] : formatSchemaIssues(parsed.error.issues, ': ', ': ')),
  ];
  return {
    errors:
      errors.length > RULEBOOK_LIMITS.maxValidationErrors
        ? [...errors.slice(0, RULEBOOK_LIMITS.maxValidationErrors), RULEBOOK_VALIDATION_TRUNCATED]
        : errors,
    ruleNames: new Set(collectCustomRuleNames(rulebook).map((name) => name.toLowerCase())),
  };
}

export function assertValidRulebook(rulebook: UnparsedValue): Rulebook {
  const result = validateRulebook(rulebook);
  if (result.errors.length > 0) {
    throw new Error(result.errors.join('; '));
  }
  return { ...getRulebookSchema().parse(rulebook), rulebook_version: 1 };
}
