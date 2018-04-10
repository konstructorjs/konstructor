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

exports.command = 'start';
exports.desc = 'start the server';
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

  const command = (typeof serverConfig.command === 'string') ? serverConfig.command : 'node';
  const options = (Array.isArray(serverConfig.options)) ? serverConfig.options : [
    path.join(currentDirectory, script),
  ];

  const commandEnv = Object.assign({}, process.env, serverConfig.environment);

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
