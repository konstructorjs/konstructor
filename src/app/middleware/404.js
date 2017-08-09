module.exports = (app) => {
  app.use(async (ctx, next) => {
    await next();

    if (ctx.status === 404) {
      const err = new Error('not found');
      err.status = 404;
      throw err;
    }
  });
};
