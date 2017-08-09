const path = require('path');
const chalk = require('chalk');

const environment = process.env.NODE_ENV || 'development';
const currentDirectory = process.cwd();

let config;
try {
  config = require(path.join(currentDirectory, `./config/${environment}.js`));
} catch (err) {
  console.log(chalk.red(`unable to import ${environment} config.`));
  console.log(err.stack);
  process.exit(1);
}

module.exports = config;
