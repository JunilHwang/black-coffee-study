import {addEventBubblingListener} from "../utils";

const components = {};

export const defineComponent = ({ name, propsKeys = [], setEvent = () => {} }, render) => {

  components[name] = class extends HTMLElement {

    $props; $state;

    constructor() {
      super();
;
      this.$props = propsKeys.reduce((obj, key) => {
        Object.defineProperty(obj, key, {
          get: () => this.getAttribute(key),
          set: value => this.setAttribute(key, value)
        })
        return obj;
      }, {});

      setEvent(this);
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
        state: this.$state,
        props: this.$props,
      });
    }

    setup ({ state }) {
      this.setState(state);
      return this;
    }

    setState (payload) {
      this.$state = { ...this.$state, ...payload };
      this.#render();
    }

    addEvent (eventType, ref, callback) {
      addEventBubblingListener(eventType, this, `[data-ref="${ref}"]`, callback);
      return this;
    }

  }

  customElements.define(name, components);

}

export const createComponent = (name, { state }) => {
  if (components[name] === undefined) {
    throw new Error(`${name} component는 존재하지 않습니다.`);
  }
  return document.createElement(name)
                 .setup({ state });
}

export default { defineComponent, createComponent };