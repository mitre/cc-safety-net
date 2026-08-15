import { describe, expect, test } from 'bun:test';
import pkg from '../../package.json';

describe('published runtime contract', () => {
  test('publishes one ESM API and rejects deep imports', () => {
    expect(pkg.exports).toEqual({
      '.': {
        types: './dist/index.d.ts',
        import: './dist/index.js',
      },
      './package.json': './package.json',
    });
    expect(pkg.main).toBe('dist/index.js');
    expect(pkg.types).toBe('dist/index.d.ts');
    expect(pkg.type).toBe('module');
  });

  test('publishes both command names from one entrypoint', () => {
    expect(pkg.bin).toEqual({
      'cc-safety-net': 'dist/bin/cc-safety-net.js',
      ccsn: 'dist/bin/cc-safety-net.js',
    });
  });

  test('pins the supported build and runtime dependency contract', () => {
    expect(pkg.packageManager).toBe('bun@1.3.14');
    expect(pkg.engines).toEqual({ node: '>=18' });
    expect(pkg.dependencies).toEqual({ zod: '4.3.5' });
    expect(pkg.devDependencies).toMatchObject({
      '@ampcode/plugin': '0.0.0-20260724002649-ga3413e7',
      '@opencode-ai/plugin': '^1.18.3',
    });
    expect(pkg.peerDependencies).toEqual({ '@opencode-ai/plugin': '^1.18.3' });
    expect(pkg.peerDependenciesMeta).toEqual({
      '@opencode-ai/plugin': { optional: true },
    });
    expect(pkg.scripts['audit:dependencies']).toBe('bun audit');
    expect('gitHead' in pkg).toBeFalse();
  });
});
