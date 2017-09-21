#!/usr/bin/env node
const path = require('path');
const chalk = require('chalk');

const endpoint = require('./endpoint');
const router = require('./router');
const model = require('./model');
const models = require('./models');
const mailer = require('./mailer');
const mail = require('./mail');
const config = require('./config');
const lib = require('./lib');

const script = process.argv[2];

if (script) {
  switch (script) {
    case 'start':
    case 'dev':
    case 'build':
    case 'digest':
    case 'clean':
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
    models,
    mailer,
    mail,
    config,
    lib,
  };
}
