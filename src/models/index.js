const path = require('path');

const currentDirectory = process.cwd();
const modelsPath = path.join(currentDirectory, './app/models');

module.exports = (name) => {
  let model;
  try {
    model = require(path.join(modelsPath, `${name}.js`));
  } catch (_) {
    // do nothing
  }
  return model;
};
