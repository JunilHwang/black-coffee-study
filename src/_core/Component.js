import {debounceOf} from "../utils";

export const Component = class {
  $state; $target; $props;

  constructor(target, state = {}, props = {}) {
    this.$target = target;
    this.$props = props;
    this.debounceRender = debounceOf(() => this._render());
    this.setState(state);
    this.initEventListener();
  }

  setState (payload) {
    this.$state = { ...this.$state, ...payload };
    this._setState(payload);
    this.render();
  }
  _setState(payload) {}

  render () {
    this.debounceRender(1000 / 60);
  }
  _render () {}
  initEventListener () { this._initEventListener(); }
  _initEventListener () { }
}