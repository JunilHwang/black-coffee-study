import {createComponent, defineComponent} from "../core/Component.js";
import '../components/User/UserName.js';
import '../components/User/UserItem.js';

const componentName = 'user-container';

defineComponent({ name: componentName }, ({ name, users }) => `
  <user-name name="${name}"></user-name>
  <section>
    <div id="user-list">
      ${users.map(({ name, isActive }) => `
        <user-item name="${name}" isActive="${isActive}"></user-item>
      `).join('')}
      <button class="ripple user-create-button">+ 유저 생성</button>
    </div>
  </section>
`);

export const UserContainer = createComponent(componentName, {
  name: 'eastjun',
  users: [
    { name: 'junil', isActive: true },
    { name: 'eyabc', isActive: false },
  ]
});