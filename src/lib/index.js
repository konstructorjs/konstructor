const path = require('path');

const currentDirectory = process.cwd();
const libPath = path.join(currentDirectory, './lib');

module.exports = (name) => {
  let lib;
  try {
    lib = require(path.join(libPath, `${name}.js`));
  } catch (_) {
    // do nothing
  }
  return lib;
};
