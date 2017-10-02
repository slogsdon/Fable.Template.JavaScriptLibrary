const path = require('path');
const fableUtils = require('fable-utils');
const name = require('./splitter.config').name;

const resolve = (relativePath) => path.join(__dirname, relativePath);

const babelOptions = fableUtils.resolveBabelOptions({
    plugins: ['transform-es2015-modules-commonjs']
});

module.exports = {
    entry: resolve(`./test/${name}.Test.fsproj`),
    outDir: resolve(`./bin/test`),
    babel: babelOptions
}
