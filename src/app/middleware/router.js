/**
 * enable routing.
 * there are three different ways you can define a route.
 * this.get('/', 'hello/index');
 * this.get('/', 'hello/index', [beforeMiddleware], [afterMiddleware]);
 * this.router.get('/', async (ctx, next) => {});
 */

const KoaRouter = require('koa-router');
const requireDirectory = require('require-directory');
const path = require('path');
const chalk = require('chalk');

const router = KoaRouter();
const currentDirectory = process.cwd();

const endpointBlacklist = name => name.includes('app/models/');
const endpoints = requireDirectory(module, path.join(currentDirectory, './app'), { exclude: endpointBlacklist });

module.exports = (app) => {
  let routes;
  try {
    const Routes = require(path.join(currentDirectory, './app/routes.js'));
    routes = new Routes();
  } catch (err) {
    console.log(chalk.red('unable to import routes.'));
    console.log(err.stack);
  }

  app.use(async (ctx, next) => {
    ctx.state.route = ctx.request.path;
    await next();
  });

  routes.router = router;

  routes.normalizeEndpoint = function normalizeEndpoint(endpointString) {
    const endpointSplit = endpointString.split('/');
    let endpoint = endpoints;
    try {
      endpointSplit.forEach((key) => {
        endpoint = endpoint[key];
      });
      endpoint = endpoint.index;
    } catch (err) {
      throw new Error('unable to find endpoint.');
    }

    if (!endpoint) {
      throw new Error('unable to find endpoint.');
    }

    return endpoint;
  };

  routes.handle = async function handle(ctx, next, Endpoint, endpointString) {
    const options = {
      path: endpointString,
    };
    const endpoint = new Endpoint(ctx, next, options);
    const response = await endpoint.handler();
    if (!endpoint.ctx.body) {
      endpoint.ctx.body = response;
    }
  };

  routes.routes();

  app.use(router.routes());
  app.use(router.allowedMethods());
};
