#!/usr/bin/env node
const yargs = require('yargs');

yargs.commandDir('scripts');
yargs.demandCommand();
yargs.help();
yargs.argv; // eslint-disable-line
