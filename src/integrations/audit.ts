import { z } from 'zod';
import { writeAuditLog } from '@/engine/audit';
import type { IntegrationDenial } from '@/integrations/denial';
import type { AuditErrorCode, AuditFailureStage } from '@/ir/audit';
import type { BlockIntent, Decision } from '@/ir/decision';
import type { ToolInvocation } from '@/ir/invocation';
import type { EffectiveSafetyLevel } from '@/ir/policy';

const sessionIdSchema = z.string().trim().min(1);
const auditFormatKey = 'shape';
type SessionIdProviderOutput = string | null | undefined;

type GuardEvaluation = {
  stage: string;
  decision: Decision;
  level?: EffectiveSafetyLevel;
  configFallback?: { reason: string };
};

type GuardAuditDescriptor = {
  decision: 'allow' | 'deny';
  command: string;
  segment: string;
  reason: string;
  cwd: string;
  toolName: string;
  level?: EffectiveSafetyLevel;
  configFallback?: true;
  ruleId?: string;
  intent?: BlockIntent;
  failureStage?: AuditFailureStage;
  errorCode?: AuditErrorCode;
};

export function projectGuardAudit(
  invocation: ToolInvocation,
  evaluation: GuardEvaluation,
  auditAllowed: boolean,
  includeInvocationCommand = true,
  failure?: { stage: AuditFailureStage; errorCode: AuditErrorCode },
): GuardAuditDescriptor | undefined {
  if (evaluation.decision.kind === 'allow') {
    if (!auditAllowed || invocation.route.kind !== 'command') return undefined;
    const command = getInvocationCommand(invocation);
    const descriptor: GuardAuditDescriptor = {
      decision: 'allow',
      command,
      segment: command,
      reason: 'allowed',
      cwd: invocation.context.executionCwd,
      toolName: invocation.toolName,
      level: evaluation.level,
    };
    if (evaluation.configFallback) descriptor.configFallback = true;
    return descriptor;
  }

  const evidence = evaluation.decision.evidence.find((item) => item.kind === 'command');
  const command =
    evidence?.command ?? (includeInvocationCommand ? getInvocationCommand(invocation) : '');
  const descriptor: GuardAuditDescriptor = {
    decision: 'deny',
    command,
    segment: evidence?.segment ?? command,
    reason: evaluation.decision.reason,
    cwd: invocation.context.executionCwd,
    toolName: invocation.toolName,
    level: evaluation.level,
    ruleId: evaluation.decision.ruleId,
    intent: evaluation.decision.intent,
    failureStage: failure?.stage,
    errorCode: failure?.errorCode,
  };
  if (evaluation.configFallback) descriptor.configFallback = true;
  return descriptor;
}

function getInvocationCommand(invocation: ToolInvocation): string {
  return 'command' in invocation ? (invocation.command ?? '') : '';
}

export function writeGuardAudit(
  audit: GuardAuditDescriptor | undefined,
  getSessionId: () => SessionIdProviderOutput,
  options: { agent: string; [auditFormatKey]?: string; homeDir?: string },
): void {
  if (!audit) return;
  let sessionOutput: unknown;
  try {
    sessionOutput = getSessionId();
  } catch {
    return;
  }
  const sessionId = sessionIdSchema.safeParse(sessionOutput).data;
  if (!sessionId) return;
  writeAuditLog(sessionId, audit.command, audit.segment, audit.reason, audit.cwd, {
    homeDir: options.homeDir,
    decision: audit.decision,
    agent: options.agent,
    [auditFormatKey]: options[auditFormatKey],
    level: audit.level,
    configFallback: audit.configFallback,
    toolName: audit.toolName,
    ruleId: audit.ruleId,
    intent: audit.intent,
    failureStage: audit.failureStage,
    errorCode: audit.errorCode,
  });
}

export function writeIntegrationDenialAudit(
  denial: IntegrationDenial,
  getSessionId: () => SessionIdProviderOutput,
  options: {
    agent: string;
    [auditFormatKey]?: string;
    toolName?: string;
    cwd?: string | null;
    homeDir?: string;
  },
): void {
  let sessionOutput: unknown;
  try {
    sessionOutput = getSessionId();
  } catch {
    return;
  }
  const sessionId = sessionIdSchema.safeParse(sessionOutput).data;
  if (!sessionId) return;
  writeAuditLog(
    sessionId,
    denial.command ?? '',
    denial.segment ?? denial.command ?? '',
    denial.reason,
    options.cwd ?? null,
    {
      homeDir: options.homeDir,
      decision: 'deny',
      agent: options.agent,
      [auditFormatKey]: options[auditFormatKey],
      toolName: options.toolName ?? denial.toolName,
      ruleId: denial.ruleId,
      intent: denial.intent,
    },
  );
}
