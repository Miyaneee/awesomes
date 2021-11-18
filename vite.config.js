import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import json5 from '@miyaneee/rollup-plugin-json5'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [json5(), solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
