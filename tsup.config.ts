import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['script/*'],
  format: 'esm',
  tsconfig: './tsconfig.json',
  target: ['es6'],
})
