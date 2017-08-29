#!/usr/bin/env node
const path = require('path');
const chalk = require('chalk');

const endpoint = require('./endpoint');
const router = require('./router');
const model = require('./model');
const config = require('./config');

const script = process.argv[2];

if (script) {
  switch (script) {
    case 'start':
    case 'dev':
    case 'build':
    case 'digest':
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
    model,
    config,
  };
}
