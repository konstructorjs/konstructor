const chalkStartTime = Date.now();
const chalk = require('chalk'); // eslint-disable-line
const config = require('../config');

const chalkEndTime = Date.now();
console.log(chalk.bgBlue(chalk.black(` [${chalkEndTime - chalkStartTime} ms] starting server `)));

const serverStartTime = Date.now();

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app.callback());

server.listen(port, () => {
  const serverEndTime = Date.now();
  console.log(chalk.bgGreen(chalk.black(` [${serverEndTime - serverStartTime} ms] listening on ${server.address().address}:${port} `)));
});

if (config.liveReload) {
  const liveReload = require('livereload');
  const path = require('path');
  const currentDirectory = process.cwd();
  const liveReloadServer = liveReload.createServer({
    exts: ['html', 'css', 'js', 'png', 'gif', 'jpg', 'php', 'php5', 'py', 'rb', 'erb', 'coffee', 'marko'],
  });
  liveReloadServer.watch([
    path.join(currentDirectory, './public'),
  ]);
}
