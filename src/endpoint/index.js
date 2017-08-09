require('marko/node-require').install({
  compilerOptions: {
    writeToDisk: false,
  },
});

const path = require('path');

const currentDirectory = process.cwd();

module.exports = class endpoint {
  constructor(ctx, next, options) {
    this.ctx = ctx;
    this.next = next;
    this.path = options.path;
  }

  async render(...input) {
    const options = {};
    options.template = path.join(currentDirectory, './app', this.path, './index.marko');
    if (input.length === 2) {
      options.template = path.join(currentDirectory, './app', this.path, input[1]);
    }
    return this.ctx.render(options.template, input[0]);
  }
};
