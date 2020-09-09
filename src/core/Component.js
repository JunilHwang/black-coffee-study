export const defineComponent = ({ name, propsKeys = [], setEvent = () => {} }, render) => {

  customElements.define(name, class extends HTMLElement {

    $props; $state;

    constructor() {
      super();

      this.$state = state;
      this.$props = propsKeys.reduce((obj, key) => {
        Object.defineProperty(obj, key, {
          get: () => this.getAttribute(key),
          set: value => this.setAttribute(key, value)
        })
        return obj;
      }, {});

      this.innerHTML = render({
        state: this.$state,
        props: this.$props,
      });

      setEvent();
    }

    static get observedAttributes() {
      return propsKeys;
    }

    attributeChangedCallback() {
      this.innerHTML = render({
        state: this.$state,
        props: this.$props,
      });
    }

  });

}

export const createComponent = () => {

}

export default { defineComponent, createComponent };