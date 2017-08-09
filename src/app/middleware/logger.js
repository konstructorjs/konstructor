module.exports = (app) => {
  const logger = require('koa-logger');
  app.use(logger());
};
