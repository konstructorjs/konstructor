const path = require('path');
const chokidar = require('chokidar');
const hotReload = require('marko/hot-reload');
const chalk = require('chalk');

const currentDirectory = process.cwd();

module.exports = () => {
  hotReload.enable();

  const watcher = chokidar.watch(path.join(currentDirectory, './app/**/*.marko'));

  watcher.on('change', (templatePath) => {
    const oldConsole = {};
    oldConsole.log = console.log;
    console.log = () => {};
    hotReload.handleFileModified(templatePath);
    console.log = oldConsole.log;
    console.log(chalk.bgGreen(chalk.black(` [hot-swap] ${path.relative(currentDirectory, templatePath)} `)));
  });
};
