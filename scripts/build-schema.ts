#!/usr/bin/env bun
import * as z from 'zod';
import { getRulesConfigSchema } from '../src/policy/schema';

const SCHEMA_OUTPUT_PATH = 'assets/cc-safety-net.schema.json';
const GeneratedSchema = z.looseObject({
  properties: z.looseObject({
    transparent_wrappers: z.looseObject({}).optional(),
  }),
});

async function main(): Promise<void> {
  console.log('Generating JSON Schema...');

  const jsonSchema = z.toJSONSchema(getRulesConfigSchema(), {
    io: 'input',
    target: 'draft-7',
  });
  const generatedSchema = GeneratedSchema.parse(jsonSchema);
  if (generatedSchema.properties.transparent_wrappers) {
    generatedSchema.properties.transparent_wrappers.uniqueItems = true;
  }

  const finalSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'https://raw.githubusercontent.com/kenryu42/cc-safety-net/main/assets/cc-safety-net.schema.json',
    title: 'CC Safety Net Configuration',
    description: 'Configuration file for cc-safety-net rulebook sources and local policy',
    ...jsonSchema,
    properties: {
      ...jsonSchema.properties,
      transparent_wrappers: generatedSchema.properties.transparent_wrappers,
    },
  };

  await Bun.write(SCHEMA_OUTPUT_PATH, `${JSON.stringify(finalSchema, null, 2)}\n`);

  // Format with Biome to ensure consistent formatting with the linter
  const result = Bun.spawnSync(['bunx', 'biome', 'format', '--write', SCHEMA_OUTPUT_PATH]);
  if (result.exitCode !== 0) {
    console.error('Failed to format schema:', result.stderr.toString());
    process.exit(1);
  }

  console.log(`✓ JSON Schema generated: ${SCHEMA_OUTPUT_PATH}`);
}

main();
