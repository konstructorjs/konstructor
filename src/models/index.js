const path = require('path');
const fs = require('fs');

const currentDirectory = process.cwd();
const modelsPath = path.join(currentDirectory, './app/models');

module.exports = (name) => {
  const modelFilePath = path.join(modelsPath, `${name}.js`);

  if (fs.existsSync(modelFilePath)) {
    const model = require(modelFilePath);
    return model;
  }

  throw new Error(`model ${modelFilePath} does not exist`);
};
