import { z } from 'zod';

export const RULEBOOK_LIMIT_ERROR = "Rulebook exceeds CC Safety Net's safe validation limits.";
export const RULEBOOK_VALIDATION_TRUNCATED = 'Additional rulebook validation errors were omitted.';

export const RULEBOOK_LIMITS = Object.freeze({
  maxAllowedCommands: 1_024,
  maxRules: 1_024,
  maxTests: 2_048,
  maxBlockArgsPerRule: 1_024,
  maxTotalBlockArgs: 16_384,
  maxStringCodeUnits: 1_048_576,
  maxAggregateStringCodeUnits: 4_194_304,
  maxFixtureCommandCodeUnits: 131_072,
  maxValidationErrors: 64,
});

interface RulebookLimitInput {
  allowed_commands?: unknown;
  author?: unknown;
  description?: unknown;
  migrated_from?: unknown;
  name?: unknown;
  rules?: unknown;
  tests?: unknown;
  version?: unknown;
}

type RulebookStringCandidate = z.input<z.ZodUnknown>;

const limitStringSchema = z.string();
const limitedRuleSchema = z.looseObject({
  block_args: z.unknown().optional(),
  command: z.unknown().optional(),
  intent: z.unknown().optional(),
  name: z.unknown().optional(),
  reason: z.unknown().optional(),
  subcommand: z.unknown().optional(),
});
const limitedFixtureSchema = z.looseObject({
  command: z.unknown().optional(),
  expect: z.unknown().optional(),
  rule: z.unknown().optional(),
});

export function isRulebookWithinAcceptanceLimits(rulebook: RulebookLimitInput): boolean {
  if (
    exceedsArrayLimit(rulebook.allowed_commands, RULEBOOK_LIMITS.maxAllowedCommands) ||
    exceedsArrayLimit(rulebook.rules, RULEBOOK_LIMITS.maxRules) ||
    exceedsArrayLimit(rulebook.tests, RULEBOOK_LIMITS.maxTests)
  ) {
    return false;
  }

  let remainingStringCodeUnits = RULEBOOK_LIMITS.maxAggregateStringCodeUnits;
  let remainingBlockArgs = RULEBOOK_LIMITS.maxTotalBlockArgs;
  const acceptString = (value: RulebookStringCandidate, fixtureCommand = false) => {
    const parsed = limitStringSchema.safeParse(value);
    if (!parsed.success) return true;
    if (
      parsed.data.length > RULEBOOK_LIMITS.maxStringCodeUnits ||
      (fixtureCommand && parsed.data.length > RULEBOOK_LIMITS.maxFixtureCommandCodeUnits) ||
      parsed.data.length > remainingStringCodeUnits
    ) {
      return false;
    }
    remainingStringCodeUnits -= parsed.data.length;
    return true;
  };

  if (
    !acceptString(rulebook.name) ||
    !acceptString(rulebook.version) ||
    !acceptString(rulebook.description) ||
    !acceptString(rulebook.author) ||
    !acceptString(rulebook.migrated_from)
  ) {
    return false;
  }

  if (Array.isArray(rulebook.allowed_commands)) {
    for (const command of rulebook.allowed_commands) {
      if (!acceptString(command)) return false;
    }
  }

  if (Array.isArray(rulebook.rules)) {
    for (const rule of rulebook.rules) {
      const parsed = limitedRuleSchema.safeParse(rule);
      if (!parsed.success) continue;
      const candidate = parsed.data;
      if (
        !acceptString(candidate.name) ||
        !acceptString(candidate.command) ||
        !acceptString(candidate.subcommand) ||
        !acceptString(candidate.reason) ||
        !acceptString(candidate.intent)
      ) {
        return false;
      }
      if (!Array.isArray(candidate.block_args)) continue;
      if (
        candidate.block_args.length > RULEBOOK_LIMITS.maxBlockArgsPerRule ||
        candidate.block_args.length > remainingBlockArgs
      ) {
        return false;
      }
      remainingBlockArgs -= candidate.block_args.length;
      for (const blockArg of candidate.block_args) {
        if (!acceptString(blockArg)) return false;
      }
    }
  }

  if (Array.isArray(rulebook.tests)) {
    for (const fixture of rulebook.tests) {
      const parsed = limitedFixtureSchema.safeParse(fixture);
      if (!parsed.success) continue;
      const candidate = parsed.data;
      if (
        !acceptString(candidate.command, true) ||
        !acceptString(candidate.expect) ||
        !acceptString(candidate.rule)
      ) {
        return false;
      }
    }
  }

  return true;
}

function exceedsArrayLimit(
  value: RulebookLimitInput[keyof RulebookLimitInput],
  limit: number,
): boolean {
  return Array.isArray(value) && value.length > limit;
}
