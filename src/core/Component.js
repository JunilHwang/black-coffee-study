import {addEventBubblingListener} from "../utils";

const components = {};

export const defineComponent = ({ name, propsKeys = [], setEvent = () => {} }, render) => {
  if (components[name] !== undefined) {
    throw new Error(`${name}은 이미 존재하는 컴포넌트입니다.`);
  }
  components[name] = class extends HTMLElement {

    #props; #state;

    constructor() {
      super();
      this.#props = propsKeys.reduce((obj, key) => {
        obj[key] = this.getAttribute(key);
        return obj;
      }, {});
      setEvent(this);
    }

    connectedCallback () {
      this.#render();
    }

    static get observedAttributes() {
      return propsKeys;
    }

    attributeChangedCallback() {
      this.#render();
    }

    #render () {
      this.innerHTML = render({
        ...this.#state,
        ...this.#props
      });
    }

    init (state) {
      this.#state = state;
      return this;
    }

    setState (payload) {
      this.#state = { ...this.#state, ...payload };
      this.#render();
    }

    addEvent (eventType, ref, callback) {
      addEventBubblingListener(eventType, this, `[data-ref="${ref}"]`, callback);
      return this;
    }

  }

  customElements.define(name, components[name]);

}

export const createComponent = (name, state = {}) => {
  if (components[name] === undefined) {
    throw new Error(`${name} component는 존재하지 않습니다.`);
  }
  return document.createElement(name)
                 .init(state);
}

export default { defineComponent, createComponent };