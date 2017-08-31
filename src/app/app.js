const Koa = require('koa');
const path = require('path');
const config = require('../config');

const app = new Koa();

const register = (name, location) => {
  const middleware = require(path.join(__dirname, location));
  middleware(app);
};

if (!config.keys) {
  throw new Error(`missing keys for ${app.env}`);
} else {
  app.keys = config.keys;
}

register('errorHandler', './middleware/error-handler.js');

register('response-time', './middleware/response-time.js');

register('logger', './middleware/logger.js');

register('template', './middleware/template.js');

register('error', './middleware/error.js');

register('compress', './middleware/compress.js');

register('conditional-get', './middleware/conditional-get.js');

register('etag', './middleware/etag.js');

register('reload', './middleware/reload.js');

register('static', './middleware/static.js');

register('assets', './middleware/assets.js');

register('session', './middleware/session.js');

register('body-parser', './middleware/body-parser.js');

register('flash', './middleware/flash.js');

register('404', './middleware/404.js');

register('router', './middleware/router.js');

module.exports = app;
