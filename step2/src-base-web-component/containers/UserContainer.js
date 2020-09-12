import {createComponent, defineComponent} from "../core/Component.js";
import '../components/User/UserName.js';
import {UserList} from "../components/User/UserList.js";

const componentName = 'user-container';

defineComponent({ name: componentName }, ({ name, users, addUser }) => `
  <user-name name="${name}"></user-name>
  ${UserList({ users, addUser }).outerHTML}
`);

export const UserContainer = createComponent(componentName, {
  name: 'eastjun',
  users: [
    { name: 'junil', isActive: true },
    { name: 'eyabc', isActive: false },
  ],
  addUser: () => {
    console.log('test');
  }
});