import { lstatSync } from 'node:fs';
import { dirname } from 'node:path';
import { z } from 'zod';
import { getAuditLogsDir } from '@/engine/facade';
import type {
  DoctorPosture,
  ProtectedDirectoryKind,
  ProtectedDirectoryPosture,
} from '@/integrations/doctor-types';

const posixProcessSchema = z.object({ getuid: z.function({ output: z.number() }) });
const filesystemErrorSchema = z.object({ code: z.string().optional() });

function inspectDirectory(kind: ProtectedDirectoryKind, path: string): ProtectedDirectoryPosture {
  try {
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) return { kind, path, status: 'unsafe', issues: ['symlink'] };
    if (!stat.isDirectory()) return { kind, path, status: 'unsafe', issues: ['not-directory'] };
    if (process.platform === 'win32') {
      return { kind, path, status: 'unknown', issues: [] };
    }
    const posixProcess = posixProcessSchema.safeParse(process);
    if (!posixProcess.success) return { kind, path, status: 'unknown', issues: [] };

    const issues = [
      ...(stat.uid !== posixProcess.data.getuid() ? (['ownership'] as const) : []),
      ...((stat.mode & 0o022) !== 0 ? (['permissions'] as const) : []),
    ];
    return { kind, path, status: issues.length > 0 ? 'unsafe' : 'safe', issues };
  } catch (error) {
    if (filesystemErrorSchema.safeParse(error).data?.code === 'ENOENT') {
      return { kind, path, status: 'not-applicable', issues: [] };
    }
    return { kind, path, status: 'unknown', issues: [] };
  }
}

export function getDoctorPosture(userConfigPath: string): DoctorPosture {
  const auditPath = getAuditLogsDir();
  return {
    directories: [
      inspectDirectory('policy', dirname(dirname(userConfigPath))),
      inspectDirectory('config', dirname(userConfigPath)),
      ...(auditPath
        ? [inspectDirectory('audit', auditPath)]
        : [{ kind: 'audit' as const, status: 'unknown' as const, issues: [] }]),
    ],
  };
}
