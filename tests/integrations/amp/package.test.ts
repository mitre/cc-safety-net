import { describe, expect, test } from 'bun:test';
import { AMP_MANAGED_HEADER, buildAmpArtifactHeader } from '@/integrations/amp/artifact';
import pkg from '../../../package.json';

describe('Amp package manifest', () => {
  test('pins @ampcode/plugin as a development-only type dependency', () => {
    expect(pkg.devDependencies['@ampcode/plugin']).toBe('0.0.0-20260724002649-ga3413e7');
    // The type dependency must never ship in the installed artifact.
    expect(Object.hasOwn(pkg.dependencies, '@ampcode/plugin')).toBeFalse();
    expect(Object.hasOwn(pkg.peerDependencies, '@ampcode/plugin')).toBeFalse();
  });

  test('stamps the managed header with the package version', () => {
    expect(buildAmpArtifactHeader(pkg.version)).toBe(
      `${AMP_MANAGED_HEADER}\n// version: ${pkg.version}\n`,
    );
  });
});
