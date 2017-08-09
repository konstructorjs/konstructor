const responseTime = require('koa-response-time');

module.exports = (app) => {
  app.use(responseTime());
};
