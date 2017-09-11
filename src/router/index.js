const path = require('path');
const CSRF = require('koa-csrf');

const currentDirectory = process.cwd();

module.exports = class router {
  constructor() {
    ['get', 'post', 'put', 'patch', 'delete'].forEach((method) => {
      this[method] = function entry(url, endpointString, beforeMiddleware, afterMiddleware) {
        const endpoint = this.normalizeEndpoint(endpointString);
        const before = beforeMiddleware || [];
        const after = afterMiddleware || [];

        if (endpoint.csrf) {
          const excludedMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
          excludedMethods.splice(excludedMethods.indexOf(method.toUpperCase()), 1);
          excludedMethods.push('GET');
          excludedMethods.push('HEAD');
          excludedMethods.push('OPTIONS');

          let config = {};
          try {
            config = require(path.join(currentDirectory, './config/csrf.js'));
          } catch (_) {
            // do nothing
          }
          const defaultConfig = {
            invalidSessionSecretMessage: 'Invalid session secret',
            invalidSessionSecretStatusCode: 403,
            invalidTokenMessage: 'Invalid CSRF token',
            invalidTokenStatusCode: 403,
            disableQuery: false,
          };

          const csrfOptions = Object.assign({}, defaultConfig, config, {
            excludedMethods,
          });

          this.router.use(url, new CSRF(csrfOptions));
        }

        before.unshift(async (ctx, next) => {
          ctx.state.csrf = ctx.csrf;
          await next();
        });

        this.router[method](
          url,
          ...before,
          async (ctx, next) => this.handle(ctx, next, endpoint, endpointString),
          ...after,
        );
      };
    });
  }
};
