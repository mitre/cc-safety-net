import { z } from 'zod';
import { formatSchemaIssues, getRulesLockfileSchema } from '@/policy/schema';
import {
  bindDelegatedPolicyFilesystemTarget,
  isPolicyFilesystemTarget,
  PolicyFilesystemError,
  type PolicyFilesystemTarget,
  readPolicyFile,
} from './filesystem';
import { getRulebookLockEntrySourceIdentityError } from './sources';
import type { RulesLockfile } from './types';

interface LockfileReadResult {
  lock: RulesLockfile | null;
  errors: string[];
}

export function readLockfile(path: string | PolicyFilesystemTarget): LockfileReadResult {
  const target = isPolicyFilesystemTarget(path) ? path : bindDelegatedPolicyFilesystemTarget(path);
  const displayPath = isPolicyFilesystemTarget(path) ? path.path : path;
  try {
    const content = readPolicyFile(target);
    if (content === null) return { lock: null, errors: [] };
    const document = z.json().parse(JSON.parse(content));
    const lockDocument = z.record(z.string(), z.json()).safeParse(document);
    if (!lockDocument.success) {
      return { lock: null, errors: [`malformed lockfile ${displayPath}: must be an object`] };
    }
    const lock = lockDocument.data;
    if (lock.version !== 1 || !Array.isArray(lock.rulebooks)) {
      return { lock: null, errors: [`malformed lockfile ${displayPath}`] };
    }
    const parsed = getRulesLockfileSchema().safeParse(lock);
    // Each entry reports independently: its own schema errors, or — when it has none —
    // its source identity error, so one bad entry never hides another's diagnostics.
    const entryErrors = lock.rulebooks.flatMap((entry, index) => {
      const issues = parsed.success
        ? []
        : parsed.error.issues.filter((issue) => issue.path[1] === index);
      if (issues.length > 0) {
        return formatSchemaIssues(issues).map((error) => `${displayPath}: ${error}`);
      }
      // An entry the schema left unflagged is a lock entry, even when a sibling failed.
      const parsedEntry = getRulesLockfileSchema().safeParse({ rulebooks: [entry] });
      if (!parsedEntry.success) return [];
      const entryData = parsedEntry.data.rulebooks[0];
      if (!entryData) return [];
      const validatedEntry =
        entryData.kind === 'local-directory'
          ? {
              spec: entryData.spec,
              kind: entryData.kind,
              path: entryData.path,
              name: entryData.name,
              version: entryData.version,
              digest: entryData.digest,
            }
          : {
              spec: entryData.spec,
              kind: entryData.kind,
              owner: entryData.owner,
              repo: entryData.repo,
              ref: entryData.ref,
              commit: entryData.commit,
              path: entryData.path,
              name: entryData.name,
              version: entryData.version,
              digest: entryData.digest,
            };
      const identityError = getRulebookLockEntrySourceIdentityError(validatedEntry);
      return identityError ? [`${displayPath}: rulebooks[${index}]: ${identityError}`] : [];
    });
    if (!parsed.success || entryErrors.length > 0) {
      return { lock: null, errors: [`malformed lockfile ${displayPath}`, ...entryErrors] };
    }
    // Keys are written in the order the resolver builds them, so re-reading and
    // rewriting an untouched entry leaves the lockfile byte-identical.
    const rulebooks = parsed.data.rulebooks.map((entry) => {
      if (entry.kind === 'local-directory') {
        return {
          spec: entry.spec,
          kind: entry.kind,
          path: entry.path,
          name: entry.name,
          version: entry.version,
          digest: entry.digest,
        };
      }
      const github = {
        spec: entry.spec,
        kind: entry.kind,
        owner: entry.owner,
        repo: entry.repo,
        ref: entry.ref,
        commit: entry.commit,
        path: entry.path,
        name: entry.name,
        version: entry.version,
        digest: entry.digest,
      };
      const displayRef = z.string().safeParse(entry.display_ref);
      return displayRef.success && displayRef.data !== ''
        ? { ...github, display_ref: displayRef.data }
        : github;
    });
    return { lock: { version: 1, rulebooks }, errors: [] };
  } catch (error) {
    if (error instanceof PolicyFilesystemError) {
      return { lock: null, errors: [error.message] };
    }
    return {
      lock: null,
      errors: ['malformed lockfile'],
    };
  }
}
