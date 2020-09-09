export const Component = ({ name, propsKeys, state = {}, setEvent = () => {} }, render) => {

  const CustomElement = class extends HTMLElement {

    $props; $state;

    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      this.$state = state;
      this.$props = propsKeys.reduce((obj, key) => {
        Object.defineProperty(obj, key, {
          get: () => { return this.getAttribute(key); },
          set: value => { this.setAttribute(key, value); }
        })
        return obj;
      }, {});

      shadow.innerHTML = render({
        state: this.$state,
        props: this.$props,
      });

      setEvent();
    }

    static get observedAttributes() {
      return propsKeys;
    }

    attributeChangedCallback() {
      this.shadowRoot.innerHTML = render({
        state: this.$state,
        props: this.$props,
      });
    }

  }

  customElements.define(name, CustomElement);

  return CustomElement;
}