import path from 'path';
import fableUtils from 'fable-utils';
import fable from 'rollup-plugin-fable';
import nodeResolve from 'rollup-plugin-node-resolve';

const resolve = (relativePath) => path.join(__dirname, relativePath);

const babelOptions = fableUtils.resolveBabelOptions({
  'presets': [
    ['env', { modules: false },]
  ],
});

export default {
  name: 'SampleFableJavascriptLibrary',
  input: resolve('./src/sample-fable-javascript-library.fsproj'),
  output: {
    file: resolve('./dist/sample-fable-javascript-library.js'),
    format: 'umd',
  },
  plugins: [
    fable({ babel: babelOptions }),
    nodeResolve({
      // other node-resolve options here
      // https://github.com/rollup/rollup-plugin-node-resolve
      customResolveOptions: {
        moduleDirectory: resolve('./node_modules'),
      },
    }),
  ],
  watch: {
    include: [ 'src/**/*fs' ],
  },
}
