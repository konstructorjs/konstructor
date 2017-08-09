module.exports = class router {
  constructor() {
    ['get', 'post', 'put', 'patch', 'delete'].forEach((method) => {
      this[method] = function entry(url, endpointString, beforeMiddleware, afterMiddleware) {
        const endpoint = this.normalizeEndpoint(endpointString);
        const before = beforeMiddleware || [];
        const after = afterMiddleware || [];
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
