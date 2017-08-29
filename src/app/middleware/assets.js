const fs = require('fs');
const path = require('path');

const currentDirectory = process.cwd();
module.exports = (app) => {
  let jsAssets;
  let cssAssets;

  // try to find the assets
  try {
    // load the folders
    jsAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/js'));
    cssAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/css'));
  } catch (_) {
    // do nothing
  }

  jsAssets.filter(asset => asset.startsWith('app'));
  cssAssets.filter(asset => asset.startsWith('app'));

  // load the assets into the state
  app.use(async (ctx, next) => {
    ctx.state.assets = {
      js: jsAssets,
      css: cssAssets,
    };
    await next();
  });
};
