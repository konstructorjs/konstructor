const path = require('path');
const chalk = require('chalk');
const childProcess = require('child_process');

const currentDirectory = process.cwd();
const env = process.env.NODE_ENV || 'production';

exports.command = 'build';
exports.desc = 'build assets';
exports.handler = () => {
  let assetsConfig;
  try {
    const config = require(path.join(currentDirectory, './config/assets.js'));
    assetsConfig = config[env];
  } catch (err) {
    console.log(chalk.red(chalk.bold('unable to load config/assets.js file')));
    console.log(err.stack);
  }

  const commandEnv = Object.assign({}, process.env, assetsConfig.environment || {});

  const result = childProcess.spawnSync(assetsConfig.command, assetsConfig.options, {
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
