import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'esm/index.js',
    output: {
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(), // 让rollup可找到node_modules中的包
      commonjs(), // 让rollup将node_modules中的包转为ESModule
      uglify(),
    ]
  }
];