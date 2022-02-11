import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: 'tsconfig.json' })],
};
