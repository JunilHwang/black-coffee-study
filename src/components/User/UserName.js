import {createComponent, defineComponent} from "../../core/Component.js";

const componentName = 'user-name';

defineComponent({ name: componentName, propsKeys: ['name'] }, ({ props: { name } }) => `
  <h1 id="user-title" data-username="${name}">
    <span><strong>${name}</strong>'s Todo List</span>
  </h1>
`);

export const UserName = props => createComponent(componentName, { props });