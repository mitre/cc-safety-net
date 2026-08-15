import {
  getEnvAssignmentValues,
  mightContainEnvAssignment,
  redactEnvAssignmentValues,
  redactNonAssignmentSecrets,
} from '@/engine/sanitize';
import type {
  CommandTrace,
  CommandTraceContext,
  CommandTraceEvent,
  CommandTraceTerminal,
  TraceStep,
} from '@/ir/command-trace';

/** @internal */
export type TraceValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | TraceValue[]
  | TraceValueObject;

/** @internal */
export type TraceValueObject = { [key: string]: TraceValue };

type CommandTraceEventInput = Readonly<
  | { kind: 'step'; scope: 'global'; step: TraceValue }
  | { kind: 'step'; scope: 'segment'; segmentIndex: number; step: TraceValue }
>;

type RecorderOptions = {
  maxEvents?: number;
  maxTextLength?: number;
  maxListLength?: number;
  maxObjectProperties?: number;
  maxDepth?: number;
};

type TraversalLimits = Readonly<{
  maxTextLength: number;
  maxListLength: number;
  maxObjectProperties: number;
  maxDepth: number;
}>;

const PROVIDER_HINTS = [
  'AKIA',
  'ASIA',
  'ghp_',
  'gho_',
  'ghu_',
  'ghs_',
  'ghr_',
  'github_pat_',
  'glpat-',
  'xox',
  'npm_',
  'pypi-',
  'rk_',
  'sk-',
  'sk_',
  'gsk_',
  'xai-',
  'pplx-',
  'bastn_',
  'tgp_v1_',
  'flp_',
  'wfr_',
  'fw_',
  'fwp_',
  'tp-',
  'psk-',
];

export type CommandTraceRecorder = ReturnType<typeof createCommandTraceRecorder>;

/** Adapts the bounded recorder to the evaluator's passive trace context. */
export function createCommandTraceContext(recorder: CommandTraceRecorder): CommandTraceContext {
  let nextSegmentIndex = 0;
  const context: CommandTraceContext = {
    allocateSegment() {
      return nextSegmentIndex++;
    },
    getNextSegmentIndex() {
      return nextSegmentIndex;
    },
    recordGlobal(step) {
      recorder.record({ kind: 'step', scope: 'global', step });
    },
    recordSegment(step, segmentIndex = context.currentSegmentIndex) {
      if (segmentIndex === undefined) return;
      recorder.record({ kind: 'step', scope: 'segment', segmentIndex, step });
    },
  };
  return context;
}

/** Records bounded, sanitized diagnostics without participating in decisions. */
export function createCommandTraceRecorder(options: RecorderOptions = {}) {
  const events: CommandTraceEvent[] = [];
  const maxEvents = options.maxEvents ?? 512;
  const limits = {
    maxTextLength: options.maxTextLength ?? 2_048,
    maxListLength: options.maxListLength ?? 128,
    maxObjectProperties: options.maxObjectProperties ?? options.maxListLength ?? 128,
    maxDepth: options.maxDepth ?? 16,
  };
  let droppedEvents = 0;
  let result: CommandTrace | undefined;
  const sensitiveHashes = new Set<string>();

  return {
    record(event: CommandTraceEventInput | undefined): void {
      if (result) return;
      try {
        if (!event || events.length >= maxEvents) {
          droppedEvents++;
          return;
        }
        events.push(deepFreeze(sanitizeEvent(event, limits, sensitiveHashes)));
      } catch {
        droppedEvents++;
      }
    },
    finish(terminal: CommandTraceTerminal): CommandTrace {
      if (result) return result;
      try {
        result = deepFreeze({
          events: Object.freeze(events),
          droppedEvents,
          terminal: sanitizeTerminal(terminal, limits, sensitiveHashes),
        });
      } catch {
        droppedEvents++;
        result = Object.freeze({
          events: Object.freeze(events),
          droppedEvents,
          terminal: Object.freeze({
            result: 'blocked',
            reason: 'trace unavailable'.slice(0, limits.maxTextLength),
            segment: 'trace unavailable'.slice(0, limits.maxTextLength),
          }),
        });
      }
      return result;
    },
  };
}

function sanitizeEvent(
  event: CommandTraceEventInput,
  limits: TraversalLimits,
  sensitiveHashes: Set<string>,
): CommandTraceEvent {
  if (event.kind !== 'step') throw new TypeError('invalid trace event');
  const scope = event.scope;
  const step = event.step;
  collectSensitiveHashes(step, sensitiveHashes, limits);
  const sanitizedStep = sanitizeValue(step, limits, sensitiveHashes);
  if (scope === 'global') return { kind: 'step', scope: 'global', step: sanitizedStep };
  if (scope !== 'segment') throw new TypeError('invalid trace event scope');
  return {
    kind: 'step',
    scope: 'segment',
    segmentIndex: event.segmentIndex,
    step: sanitizedStep,
  };
}

function sanitizeTerminal(
  terminal: CommandTraceTerminal,
  limits: TraversalLimits,
  sensitiveHashes: ReadonlySet<string>,
): CommandTraceTerminal {
  const result = terminal.result;
  if (result === 'allowed') return Object.freeze({ result: 'allowed' });
  if (result !== 'blocked') throw new TypeError('invalid trace terminal');
  const ruleId = terminal.ruleId;
  const sanitized = {
    result: 'blocked',
    reason: sanitizeText(terminal.reason, limits, sensitiveHashes),
    segment: sanitizeText(terminal.segment, limits, sensitiveHashes),
  } satisfies CommandTraceTerminal;
  if (ruleId)
    return Object.freeze({
      ...sanitized,
      ruleId: sanitizeText(ruleId, limits, sensitiveHashes),
    });
  return Object.freeze(sanitized);
}

function collectSensitiveHashes(
  value: TraceValue,
  hashes: Set<string>,
  limits: TraversalLimits,
  depth = 0,
  seen = new WeakSet<object>(),
): void {
  if (isString(value)) {
    const bounded = value.slice(0, limits.maxTextLength);
    if (!mightContainEnvAssignment(bounded)) return;
    for (const assignment of getEnvAssignmentValues(bounded)) {
      for (const token of assignment.match(/[^\s"'()$]+/g) ?? []) hashes.add(hashText(token));
    }
    return;
  }
  if (!isTraceObject(value) || depth >= limits.maxDepth || seen.has(value)) return;
  seen.add(value);
  if (isTraceArray(value)) {
    const length = Math.min(value.length, limits.maxListLength);
    for (let index = 0; index < length; index++) {
      collectSensitiveHashes(value[index], hashes, limits, depth + 1, seen);
    }
    return;
  }
  let retained = 0;
  const sanitizedKeys = new Set<string>();
  for (const key in value) {
    if (!Object.hasOwn(value, key)) continue;
    if (retained >= limits.maxObjectProperties) break;
    retained++;
    collectSensitiveHashes(key, hashes, limits);
    const sanitizedKey = sanitizeText(key, limits, hashes);
    if (sanitizedKeys.has(sanitizedKey)) continue;
    sanitizedKeys.add(sanitizedKey);
    collectSensitiveHashes(value[key], hashes, limits, depth + 1, seen);
  }
}

function sanitizeValue(
  value: TraceStep,
  limits: TraversalLimits,
  sensitiveHashes: ReadonlySet<string>,
  depth?: number,
  seen?: WeakSet<object>,
): TraceStep;
function sanitizeValue(
  value: TraceValue,
  limits: TraversalLimits,
  sensitiveHashes: ReadonlySet<string>,
  depth?: number,
  seen?: WeakSet<object>,
): TraceStep;
function sanitizeValue(
  value: TraceValue,
  limits: TraversalLimits,
  sensitiveHashes: ReadonlySet<string>,
  depth = 0,
  seen = new WeakSet<object>(),
): TraceValue {
  if (isString(value)) return sanitizeText(value, limits, sensitiveHashes);
  if (!isTraceObject(value)) return value;
  if (depth >= limits.maxDepth) return undefined;
  if (seen.has(value)) return undefined;
  seen.add(value);
  if (isTraceArray(value)) {
    const sanitized = [];
    const length = Math.min(value.length, limits.maxListLength);
    for (let index = 0; index < length; index++) {
      sanitized.push(sanitizeValue(value[index], limits, sensitiveHashes, depth + 1, seen));
    }
    return sanitized;
  }
  const sanitized: TraceValueObject = {};
  let retained = 0;
  for (const key in value) {
    if (!Object.hasOwn(value, key)) continue;
    if (retained >= limits.maxObjectProperties) break;
    retained++;
    const sanitizedKey = sanitizeText(key, limits, sensitiveHashes);
    if (Object.hasOwn(sanitized, sanitizedKey)) continue;
    Object.defineProperty(sanitized, sanitizedKey, {
      value: sanitizeValue(value[key], limits, sensitiveHashes, depth + 1, seen),
      enumerable: true,
      configurable: true,
      writable: true,
    });
  }
  return sanitized;
}

function sanitizeText(
  value: string,
  limits: TraversalLimits,
  sensitiveHashes: ReadonlySet<string>,
): string {
  const bounded = value.slice(0, limits.maxTextLength);
  const assignmentsRedacted = mightContainEnvAssignment(bounded)
    ? redactEnvAssignmentValues(bounded)
    : bounded;
  const derivedRedacted =
    sensitiveHashes.size > 0
      ? redactDerivedSecrets(assignmentsRedacted, sensitiveHashes)
      : assignmentsRedacted;
  return (
    mightContainNonAssignmentSecret(derivedRedacted)
      ? redactNonAssignmentSecrets(derivedRedacted)
      : derivedRedacted
  ).slice(0, limits.maxTextLength);
}

function mightContainNonAssignmentSecret(text: string): boolean {
  return (
    text.includes('PRIVATE KEY') ||
    text.includes('://') ||
    text.includes('eyJ') ||
    (text.includes(':') &&
      /(?:authorization|cookie|x-api-key|api-key|(?:^|\s)(?:-u|--user)(?:\s|=))/i.test(text)) ||
    (text.length >= 14 && PROVIDER_HINTS.some((hint) => text.includes(hint))) ||
    (text.length >= 49 && /\b[a-f0-9]{32}\.[A-Za-z0-9]{16}\b/.test(text))
  );
}

function redactDerivedSecrets(text: string, hashes: ReadonlySet<string>): string {
  return text.replace(/[^\s"'()$]+/g, (token) =>
    hashes.has(hashText(token)) ? '<redacted>' : token,
  );
}

function hashText(text: string): string {
  let first = 2_166_136_261;
  let second = 2_166_136_261;
  for (let index = 0; index < text.length; index++) {
    first = Math.imul(first ^ text.charCodeAt(index), 16_777_619);
    second = Math.imul(second ^ text.charCodeAt(text.length - index - 1), 16_777_619);
  }
  return `${first >>> 0}:${second >>> 0}:${text.length}`;
}

function deepFreeze<T>(value: T): T {
  if (value !== null && value !== undefined && !Object.isFrozen(value)) {
    for (const child of Object.values(value)) deepFreeze(child);
    Object.freeze(value);
  }
  return value;
}

function isString(value: TraceValue): value is string {
  return value !== Object(value) && Object.prototype.toString.call(value) === '[object String]';
}

function isTraceObject(value: TraceValue): value is TraceValueObject | TraceValue[] {
  return value !== null && Object(value) === value;
}

function isTraceArray(value: TraceValueObject | TraceValue[]): value is TraceValue[] {
  return Array.isArray(value);
}
