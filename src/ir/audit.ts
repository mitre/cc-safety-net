import { z } from 'zod';

/** Guard stages recorded for an unexpected evaluation failure. */
/** @internal */
export const AUDIT_FAILURE_STAGES = Object.freeze([
  'policy-protection',
  'config-load',
  'config-state',
  'secret-protection',
  'non-command',
  'command-validation',
  'command-analysis',
] as const);
export type AuditFailureStage = (typeof AUDIT_FAILURE_STAGES)[number];

/** Sanitized categories recorded for an unexpected evaluation failure. */
/** @internal */
export const AUDIT_ERROR_CODES = Object.freeze([
  'path-canonicalization-limit',
  'tool-input-limit',
  'structural-shell-syntax-limit',
  'unexpected-error',
] as const);
export type AuditErrorCode = (typeof AUDIT_ERROR_CODES)[number];

export const AUDIT_FORMAT_KEY = 'shape';

/** Audit log wire entry. Loose parsing preserves fields written by newer versions. */
export const AuditLogEntrySchema = z.looseObject({
  ts: z.string(),
  id: z.string().optional(),
  v: z.string().optional(),
  sessionId: z.string().optional(),
  decision: z.string().optional(),
  agent: z.string().optional(),
  [AUDIT_FORMAT_KEY]: z.string().optional(),
  level: z.string().optional(),
  configFallback: z.literal(true).optional(),
  toolName: z.string().optional(),
  command: z.string(),
  segment: z.string().default(''),
  truncated: z.boolean().optional(),
  reason: z.string(),
  ruleId: z.string().optional(),
  intent: z.string().optional(),
  failureStage: z.string().optional(),
  errorCode: z.string().optional(),
  cwd: z.string().nullable().optional(),
});

export type AuditLogEntry = z.output<typeof AuditLogEntrySchema>;
