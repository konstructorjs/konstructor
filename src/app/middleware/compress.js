const compress = require('koa-compress');
const zlib = require('zlib');

module.exports = (app) => {
  app.use(compress({
    flush: zlib.Z_SYNC_FLUSH,
  }));
};
