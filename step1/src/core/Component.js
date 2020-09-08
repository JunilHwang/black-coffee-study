import {addEventBubblingListener, debounceOneFrame} from "../utils/index.js";

export const Component = class {
  $state = {}; $target; $props;

  constructor(target, state = {}, props = {}) {
    this.$target = target;
    this.$props = props;
    this.$render = debounceOneFrame(() => {
      target.innerHTML = this.render();
      this.componentDidUpdate();
    });
    this.setEvent(target);
    this.setState(state);
  }

  setState (payload) {
    this.$state = { ...this.$state, ...payload };
    this.$render();
  }
  render () { return '' }
  componentDidUpdate () {}
  setEvent () { }
  addEvent (...args) {
    if (args.length === 2) {
      this.$target.addEventListener(...args);
      return this;
    }
    const [ eventType, ref, callback ] = args;
    addEventBubblingListener(eventType, this.$target, `[data-ref="${ref}"]`, callback);
    return this;
  }
}