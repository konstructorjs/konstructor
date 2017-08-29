const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');

const rmDir = dirPath => new Promise((resolve, reject) => {
  rimraf(dirPath, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

const currentDirectory = process.cwd();
const assetsDir = path.join(currentDirectory, './public/assets');

module.exports = () => {
  try {
    rmDir(assetsDir);
    console.log(chalk.green('removed compiled assets'));
  } catch (err) {
    console.log(chalk.red(`unable to remove ${assetsDir}`));
    process.exit(1);
  }
};
