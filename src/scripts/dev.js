const path = require('path');
const chalk = require('chalk');
const childProcess = require('child_process');

const currentDirectory = process.cwd();
const env = process.env.NODE_ENV || 'development';

let packageJSON = {};
try {
  packageJSON = require(path.join(currentDirectory, './package.json'));
} catch (err) {
  // do nothing
}

exports.command = 'dev';
exports.desc = 'start the dev and assets server';
exports.handler = () => {
  const script = (typeof packageJSON.main === 'string') ? packageJSON.main : './index.js';
  let serverConfig;
  try {
    const config = require(path.join(currentDirectory, './config/server.js'));
    serverConfig = config[env];
  } catch (err) {
    console.log(chalk.red(chalk.bold('unable to load config/server.js file')));
    console.log(err.stack);
  }
  let assetsConfig;
  let assetsProcess;
  try {
    const config = require(path.join(currentDirectory, './config/assets.js'));
    assetsConfig = config[env];
  } catch (err) {
    // do nothing
  }

  if (assetsConfig) {
    const assetsEnv = Object.assign({}, process.env, assetsConfig.environment || {});
    assetsProcess = childProcess.spawn(assetsConfig.command, assetsConfig.options || [], {
      stdio: 'inherit',
      env: assetsEnv,
    });

    assetsProcess.on('error', (err) => {
      console.log(chalk.red(err));
      assetsProcess.kill();
    });
    assetsProcess.on('close', () => {
      assetsProcess.kill();
    });
    assetsProcess.on('exit', () => {
      assetsProcess.kill();
    });
  }

  const command = (typeof serverConfig.command === 'string') ? serverConfig.command : 'nodemon';
  const options = (Array.isArray(serverConfig.options)) ? serverConfig.options : [
    path.join(currentDirectory, script),
  ];

  const commandEnv = Object.assign({}, process.env, serverConfig.environment || {});
  const result = childProcess.spawnSync(command, options, {
    stdio: 'inherit',
    env: commandEnv,
  });

  if (result.error) {
    if (result.stderr) {
      console.log(chalk.red(result.stderr.toString()));
    }
    console.log(chalk.red(result.error.toString()));
    process.exit(1);
  }
};
