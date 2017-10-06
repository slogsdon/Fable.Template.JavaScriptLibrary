const path = require('path');

const name = 'FableTemplate.JsLib';
const resolve = (relativePath) => path.join(__dirname, relativePath);

module.exports = {
  entry: resolve(`./src/${name}.fsproj`),
  outDir: resolve(`./dist`),
}
module.exports.name = name;
