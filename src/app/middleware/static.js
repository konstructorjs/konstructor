const path = require('path');
const koaStatic = require('koa-static');

const currentDirectory = process.cwd();

module.exports = (app) => {
  app.use(koaStatic(path.join(currentDirectory, './public')));
};
