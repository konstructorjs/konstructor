const fs = require('fs');
const path = require('path');

const currentDirectory = process.cwd();
module.exports = (app) => {
  // load the assets into the state
  app.use(async (ctx, next) => {
    ctx.state.assets = {
      js() {
        let jsAssets;
        try {
          jsAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/js'));
        } catch (_) {
          // do nothing
        }

        jsAssets = jsAssets || [];

        jsAssets.filter(asset => path.extname(asset) === '.js');
        return jsAssets;
      },
      css() {
        let cssAssets;
        try {
          cssAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/css'));
        } catch (_) {
          // do nothing
        }

        cssAssets = cssAssets || [];

        cssAssets.filter(asset => path.extname(asset) === '.css');
        return cssAssets;
      },
    };
    await next();
  });
};