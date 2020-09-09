import {addEventBubblingListener} from "../utils";

const components = {};

export const defineComponent = ({ name, propsKeys = [], setEvent = () => {} }, render) => {
  if (components[name] !== undefined) {
    throw new Error(`${name}은 이미 존재하는 컴포넌트입니다.`);
  }
  components[name] = class extends HTMLElement {

    $props; $state;

    constructor() {
      super();

      const $props = propsKeys.reduce((obj, key) => {
        Object.defineProperty(obj, key, {
          get: () => this.getAttribute(key),
          set: value => { this.setAttribute(key, value); }
        })
        return obj;
      }, {});

      Object.defineProperty(this, '$props', {
        set: props => {
          for (const [key, value] of Object.entries(props)) {
            $props[key] = value;
          }
        }
      })

      this.$props = $props;

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
        state: this.$state,
        props: this.$props,
      });
    }

    init ({state, props}) {
      this.$props = props;
      this.$state = state;
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

  customElements.define(name, components[name]);

}

export const createComponent = (name, initConfig = { state: {}, props: {} }) => {
  if (components[name] === undefined) {
    throw new Error(`${name} component는 존재하지 않습니다.`);
  }
  return document.createElement(name)
                 .init(initConfig);
}

export default { defineComponent, createComponent };