const etag = require('koa-etag');

module.exports = (app) => {
  app.use(etag());
};
