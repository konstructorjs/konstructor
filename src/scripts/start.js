const chalk = require('chalk');
const childProcess = require('child_process');
const config = require('../config/index.js');

module.exports = () => {
  if (config.server.environment) {
    Object.keys(config.server.environment).forEach((key) => {
      process.env[key] = config.server.environment[key];
    });
  }

  const result = childProcess.spawnSync(config.server.command, config.server.options, { stdio: 'inherit' });

  if (result.error) {
    if (result.stderr) {
      console.log(chalk.red(result.stderr.toString()));
    }
    console.log(chalk.red(result.error.toString()));
    process.exit(1);
  }
  process.exit(result.status);
};
