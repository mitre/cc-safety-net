#!/usr/bin/env bun

import { readFileSync } from 'node:fs';
import { z } from 'zod';

interface ReleaseAssetState {
  draft: boolean;
  prerelease: boolean;
  assets: readonly string[];
}

const releaseMetadataSchema = z.object({
  draft: z.boolean(),
  prerelease: z.boolean(),
  assets: z.array(z.unknown()).optional(),
});
const releaseAssetSchema = z.object({ name: z.string() });

export function planReleaseAssets(state: ReleaseAssetState, expectedAssets: readonly string[]) {
  if (state.prerelease) throw new Error('Existing GitHub release must not be a prerelease');
  if (new Set(state.assets).size !== state.assets.length) {
    throw new Error('Existing GitHub release has a duplicate asset');
  }
  const unexpected = state.assets.filter((asset) => !expectedAssets.includes(asset));
  if (unexpected.length > 0) {
    throw new Error(`Existing GitHub release has an unexpected asset: ${unexpected.join(', ')}`);
  }
  return {
    finalizeDraft: state.draft,
    missing: expectedAssets.filter((asset) => !state.assets.includes(asset)).toSorted(),
    present: state.assets.toSorted(),
  };
}

function argument(name: string): string {
  const index = process.argv.indexOf(name);
  const value = index === -1 ? undefined : process.argv[index + 1];
  if (value) return value;
  throw new Error(`${name} is required`);
}

if (import.meta.main) {
  const release = releaseMetadataSchema.safeParse(
    JSON.parse(readFileSync(argument('--state'), 'utf8')),
  );
  if (!release.success) {
    throw new Error('Release state has invalid draft or prerelease metadata');
  }
  const assets = (release.data.assets ?? []).map((asset) => {
    const parsedAsset = releaseAssetSchema.safeParse(asset);
    if (parsedAsset.success) return parsedAsset.data.name;
    throw new Error('Release state has an invalid asset name');
  });
  const expected = process.argv.flatMap((value, index) => {
    const next = process.argv[index + 1];
    return value === '--expected' && next ? [next] : [];
  });
  if (expected.length === 0) throw new Error('--expected is required');
  console.log(
    JSON.stringify(
      planReleaseAssets(
        { draft: release.data.draft, prerelease: release.data.prerelease, assets },
        expected,
      ),
    ),
  );
}
