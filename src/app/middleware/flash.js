module.exports = (app) => {
  app.use(async (ctx, next) => {
    ctx.flash = (type, message) => {
      // if flash is not defined in the session, add it
      if (!ctx.session.flash) {
        ctx.session.flash = [];
      }

      // add the message into the session.
      ctx.session.flash.push({ type, message });
    };

    await next();
  });
};
