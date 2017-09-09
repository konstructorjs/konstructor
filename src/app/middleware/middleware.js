const path = require('path');

const currentDirectory = process.cwd();

module.exports = (app) => {
  let middleware = [];
  try {
    const middlewares = require(path.join(currentDirectory, './config/middleware.js'));
    middleware = middlewares.middleware;
  } catch (_) {
    // do nothing
  }
  middleware.forEach((mw) => {
    mw(app);
  });
};
