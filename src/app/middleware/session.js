const session = require('koa-session');
const path = require('path');

const currentDirectory = process.cwd();

module.exports = (app) => {
  let sessionConfig = {};
  try {
    sessionConfig = require(path.join(currentDirectory, './config/session.js'));
  } catch (_) {
    // do nothing
  }

  app.use(session(sessionConfig, app));
};
