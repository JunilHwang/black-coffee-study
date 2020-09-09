import {addEventBubblingListener} from "../utils";

const components = {};

export const defineComponent = ({ name, setEvent = () => {} }, render) => {
  if (components[name] !== undefined) {
    throw new Error(`${name}은 이미 존재하는 컴포넌트입니다.`);
  }
  components[name] = class extends HTMLElement {

    #attributes = {};
    #props = {};
    static propsKeys = new Set();

    constructor() {
      super();
      setEvent(this);
    }

    connectedCallback () {
      this.#attributes = [ ...this.attributes ].reduce((obj, { name, value }) => {
        try {
          obj[name] = JSON.parse(value);
          this.removeAttribute(name);
        } catch (e) {
          obj[name] = value;
        }
        return obj;
      }, {});
      this.#render();
    }

    static get observedAttributes() {
      return [ ...this.propsKeys ];
    }

    attributeChangedCallback() {
      this.#render();
    }

    #render () {
      this.innerHTML = render(this.#attributes);
    }

    addEvent (eventType, ref, callback) {
      addEventBubblingListener(eventType, this, `[data-ref="${ref}"]`, callback);
      return this;
    }

  }

  customElements.define(name, components[name]);

}

export const createComponent = (name, props = {}) => {
  if (components[name] === undefined) {
    throw new Error(`${name} component는 존재하지 않습니다.`);
  }
  for (const key in props) components[name].propsKeys.add(key);
  const component = document.createElement(name);
  for (const [key, value] of Object.entries(props)) {
    const isObject = typeof value === 'object';
    component.setAttribute(key, isObject ? JSON.stringify(value) : value);
  }
  return component;
}

export default { defineComponent, createComponent };