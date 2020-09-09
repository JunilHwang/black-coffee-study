import {createComponent, defineComponent} from "../../core/Component.js";

const componentName = 'user-item'

defineComponent(
  { name: componentName, propsKeys: ['name', 'isActive'] },
({ name, isActive }) => `
    <button class="ripple ${eval(isActive) ? 'active' : ''}">${name}</button>
  `
);

export const UserItem = props => createComponent(componentName, { props }).outerHTML;