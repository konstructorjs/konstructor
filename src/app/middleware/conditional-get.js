const conditionalGet = require('koa-conditional-get');

module.exports = (app) => {
  app.use(conditionalGet());
};
