const path = require('path');
const fableUtils = require('fable-utils');

const name = 'FableTemplate.JsLib';
const resolve = (relativePath) => path.join(__dirname, relativePath);

module.exports = {
  name: name,
  entry: resolve(`./src/${name}.fsproj`),
  outDir: resolve(`./dist`),
  babel: fableUtils.resolveBabelOptions({
    presets: [['env', { modules: 'commonjs' }]],
    sourceMaps: true,
  }),
};
