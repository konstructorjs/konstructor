module.exports = class konstructor {
  constructor() {
    this.mixins = {};
  }

  add(wrapper) {
    wrapper.setup(this);
  }
};
