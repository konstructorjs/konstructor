#!/usr/bin/env node
const path = require('path');
const chalk = require('chalk');

const endpoint = require('./endpoint');
const router = require('./router');

const script = process.argv[2];

if (script) {
  switch (script) {
    case 'start':
    case 'dev':
    case 'build':
      require(path.join(__dirname, './scripts', script))();
      break;
    default:
      console.log(chalk.red('unknown script', script));
      break;
  }
} else {
  module.exports = {
    endpoint,
    router,
  };
}
