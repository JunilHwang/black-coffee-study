const Component = (name, propsKeys, render) => {

  const CustomElement = class extends HTMLElement {

    $props;

    constructor() {
      super();

      for (const key of propsKeys) {
        Object.defineProperty(this, key, {
          set: value => {
            this.setAttribute(key, value);
          }
        })
      }

      this.$props = propsKeys.reduce((obj, key) => {
        Object.defineProperty(obj, key, {
          get: () => { return this.getAttribute(key); },
          set: value => { this.setAttribute(key, value); }
        })
        return obj;
      }, {});

      this.innerHTML = render(this.$props);
    }

    static get observedAttributes() {
      return propsKeys;
    }

    attributeChangedCallback() {
      this.innerHTML = render(this.$props);
    }
  }

  customElements.define(name, CustomElement);

  return CustomElement;
}

Component('todo-item',['contents', 'key'], ({ key, contents }) => `
  <p data-key="${key}">${contents}</p>
`);

document.querySelector('#app').innerHTML = `
  <todo-item key="1" contents="test" />
`

const todoItem = document.querySelector('todo-item');