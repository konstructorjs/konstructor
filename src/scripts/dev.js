/* eslint-disable global-require, import/no-dynamic-require */
const childProcess = require('child_process');
const chalk = require('chalk');
const config = require('../config/index.js');

const environment = process.env.NODE_ENV || 'development';

module.exports = () => {
  const processes = {};

  const killProcesses = () => {
    Object.keys(processes).forEach((subProcess) => {
      try {
        subProcess.kill();
      } catch (_) {
        // do nothing
      }
    });
  };

  process.on('exit', () => {
    killProcesses();
    process.exit(0);
  });

  process.on('SIGINT', () => {
    killProcesses();
    process.exit(1);
  });

  process.on('uncaughtException', () => {
    killProcesses();
    process.exit(1);
  });

  if (config.server) {
    if (config.server.environment) {
      Object.keys(config.server.environment).forEach((key) => {
        process.env[key] = config.server.environment[key];
      });
    }
    const mainProcess = childProcess.spawn(config.server.command, config.server.options || [], { stdio: 'inherit' });
    processes.main = mainProcess;

    mainProcess.on('error', (err) => {
      console.log(chalk.red(err));
      killProcesses();
    });
    mainProcess.on('close', () => {
      killProcesses();
    });
    mainProcess.on('exit', () => {
      killProcesses();
    });
  } else {
    console.log(chalk.red(`error in ${environment} server config`));
    process.exit(1);
  }

  if (config.assets) {
    const assetProcess = childProcess.spawn(config.assets.command, config.assets.options || [], { stdio: 'inherit' });
    processes.assets = assetProcess;

    assetProcess.on('error', (err) => {
      console.log(chalk.red(err));
      killProcesses();
    });
    assetProcess.on('close', () => {
      killProcesses();
    });
    assetProcess.on('exit', () => {
      killProcesses();
    });
  } else {
    console.log(chalk.red(`error in ${environment} assets config`));
    process.exit(1);
  }
};
