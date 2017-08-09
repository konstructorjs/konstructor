const path = require('path');

const currentDirectory = process.cwd();

module.exports = (app) => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      err.status = ctx.status;

      ctx.app.emit('error', err, ctx);

      ctx.body = await ctx.render(path.join(currentDirectory, './app/application/error.marko'), { err });
    }
  });
};
