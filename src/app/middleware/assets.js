const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);

const currentDirectory = process.cwd();

module.exports = (app) => {
  // load the assets into the state
  app.use(async (ctx, next) => {
    const data = {};
    data.jsAssets = await readdir(path.join(currentDirectory, './public/assets/js'));
    data.cssAssets = await readdir(path.join(currentDirectory, './public/assets/css'));
    data.jsAssets = data.jsAssets || [];
    data.cssAssets = data.cssAssets || [];

    data.jsAssets = data.jsAssets.filter(asset => path.extname(asset) === '.js');
    data.cssAssets = data.cssAssets.filter(asset => path.extname(asset) === '.css');

    ctx.state.assets = {
      js() {
        return data.jsAssets;
      },
      css() {
        return data.cssAssets;
      },
    };
    await next();
  });
};
