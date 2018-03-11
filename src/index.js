module.exports = class konstructor {
  constructor() {
    this.mixins = {};
  }

  add(wrapper) {
    if (wrapper.setup) {
      return wrapper.setup(this);
    }
    return wrapper.constructor.setup(this);
  }
};
