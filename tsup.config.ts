import { readFileSync } from 'node:fs';
import { defineConfig } from 'tsup'

const sciuxFilePlugin = {
  name: 'text-file-plugin',
  setup(build: any) {
    build.onLoad({ filter: /\.{sciux|md}$/ }, async (args: any) => {
      const contents = readFileSync(args.path, 'utf8');
      return {
        contents: `export default ${JSON.stringify(contents)};`,
        loader: 'js',
      };
    });
  },
};

export default defineConfig({
  entry: ['script/*'],
  format: 'esm',
  tsconfig: './tsconfig.json',
  target: ['es6'],
  plugins: [sciuxFilePlugin],
  esbuildPlugins: [sciuxFilePlugin],
})
