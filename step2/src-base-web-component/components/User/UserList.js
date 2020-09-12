import {createComponent, defineComponent} from "../../core/Component.js";
import './UserItem.js';

const componentName = 'user-list';


const setEvent = $target => {
  $target.addEvent('click', 'add', () => {
        $target.$props.addUser();
  });
}

defineComponent({ name: componentName, setEvent }, ({ users }) => `
  <section>
    <div id="user-list">
      ${users.map(({ name, isActive }) => `
        <user-item name="${name}" isActive="${isActive}"></user-item>
      `).join('')}
      <button class="ripple user-create-button" data-ref="add">+ 유저 생성</button>
    </div>
  </section>
`);

export const UserList = props => createComponent(componentName, props);