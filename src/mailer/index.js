const nodemailer = require('nodemailer');
const path = require('path');

const currentDirectory = process.cwd();

let mailerConfig = {};
try {
  mailerConfig = require(path.join(currentDirectory, './config/mailer.js'));
} catch (err) {
  // do nothing
}

module.exports = nodemailer.createTransport(mailerConfig);
