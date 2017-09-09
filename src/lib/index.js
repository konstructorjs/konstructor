const path = require('path');
const requireDirectory = require('require-directory');

const currentDirectory = process.cwd();

module.exports = requireDirectory(module, path.join(currentDirectory, './lib'));
