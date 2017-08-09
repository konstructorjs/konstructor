/* eslint-disable global-require, import/no-dynamic-require */
const childProcess = require('child_process');
const chalk = require('chalk');
const config = require('../config');

module.exports = () => {
  const assetProcess = childProcess.spawnSync(config.assets.command, config.assets.options || [], { stdio: 'inherit' });
  if (assetProcess.error) {
    if (assetProcess.stderr) {
      console.log(chalk.red(assetProcess.stderr.toString()));
    }
    console.log(chalk.red(assetProcess.error.toString()));
    process.exit(1);
  }
};
