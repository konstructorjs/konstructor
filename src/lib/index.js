const path = require('path');
const fs = require('fs');

const currentDirectory = process.cwd();
const libPath = path.join(currentDirectory, './lib');

module.exports = (name) => {
  const libFilePath = path.join(libPath, `${name}.js`);

  if (fs.existsSync(libFilePath)) {
    const lib = require(libFilePath);
    return lib;
  }

  throw new Error(`lib ${libFilePath} does not exist`);
};
