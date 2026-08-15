import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { z } from 'zod';

const PackageDependenciesSchema = z.object({ dependencies: z.record(z.string(), z.string()) });

describe('runtime dependencies', () => {
  test('ships only exact Zod at runtime', () => {
    const packageJson = PackageDependenciesSchema.parse(
      JSON.parse(readFileSync('package.json', 'utf-8')),
    );

    expect(packageJson.dependencies).toEqual({ zod: '4.3.5' });
  });
});
