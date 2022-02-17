import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: 'tsconfig.json' }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'src/@types', dest: 'dist' },
      ],
    }),
  ],
};
