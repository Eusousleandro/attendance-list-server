import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'], // ou 'cjs'
  outDir: 'dist',
  clean: true
})