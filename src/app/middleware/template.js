module.exports = (app) => {
  app.use(async (ctx, next) => {
    ctx.render = async (templatePath, input) => {
      if (ctx.session.flash) {
        ctx.state.flash = ctx.session.flash;
        ctx.session.flash = [];
      }
      const template = require(templatePath);
      ctx.type = 'html';
      const data = Object.assign({}, ctx.state, input);
      return template.stream(data);
    };
    await next();
  });
};
