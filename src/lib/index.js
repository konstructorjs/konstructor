const path = require('path');
const fs = require('fs');
const requireDirectory = require('require-directory');

const currentDirectory = process.cwd();

let lib;
const libPath = path.join(currentDirectory, './lib');
if (fs.existsSync(libPath)) {
  lib = requireDirectory(module, libPath);
} else {
  lib = {};
}

module.exports = lib;
