/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const { esbuildDecorators } = require('@anatine/esbuild-decorators');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outdir: 'dist',
    bundle: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14',
    plugins: [esbuildDecorators()],
    // plugins: [esbuildDecorators(),nodeExternalsPlugin()], works when we do not bundle externals
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
