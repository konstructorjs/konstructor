const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const chalk = require('chalk');

const currentDirectory = process.cwd();

module.exports = () => {
  let jsAssets;
  let cssAssets;
  try {
    jsAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/js'));
    cssAssets = fs.readdirSync(path.join(currentDirectory, './public/assets/css'));
    if (jsAssets.length === 0 || cssAssets.length === 0) {
      throw new Error('assets not found');
    }
  } catch (err) {
    console.log(chalk.red('assets not found, please run `npm run build`'));
    process.exit(1);
  }

  const fingerprintAssets = (assetPath, fileName) => {
    new Promise((resolve, reject) => {
      const hash = crypto.createHash('md5');
      const stream = fs.createReadStream(path.join(assetPath, fileName));

      stream.on('data', (data) => {
        hash.update(data, 'utf8');
      });

      stream.on('end', () => {
        resolve(hash.digest('hex'));
      });

      stream.on('error', (err) => {
        reject(err);
      });
    }).then((hash) => {
      const extension = path.extname(fileName);
      const name = fileName.replace(extension, '');
      const newName = `${name}-${hash}${extension}`;
      console.log(chalk.green(`moving ${fileName} to ${newName}`));
      fs.renameSync(path.join(assetPath, fileName), path.join(assetPath, newName));
    }).catch((err) => {
      console.log(chalk.red(err));
      process.exit(1);
    });
  };

  let i = 0;

  jsAssets.forEach((file) => {
    const splitFile = file.split('-');
    if (!(/[a-fA-F0-9]{32}/).test(splitFile[splitFile.length - 1]) && path.extname(file) === '.js') {
      fingerprintAssets(path.join(currentDirectory, './public/assets/js'), file);
      i += 1;
    }
  });

  cssAssets.forEach((file) => {
    const splitFile = file.split('-');
    if (!(/[a-fA-F0-9]{32}/).test(splitFile[splitFile.length - 1]) && path.extname(file) === '.css') {
      fingerprintAssets(path.join(currentDirectory, './public/assets/css'), file);
      i += 1;
    }
  });

  if (i === 0) {
    console.log(chalk.red('no assets to digest'));
  }
};
