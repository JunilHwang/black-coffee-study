import {createComponent, defineComponent} from "../core/Component.js";
import '../components/User/UserName.js';
import {UserList} from "../components/User/UserList.js";

const componentName = 'user-container';


const setEvent = $target => {
  $target.addEvent('click', )
}

defineComponent({ name: componentName, setEvent }, ({ name, users }) => `
  <user-name name="${name}"></user-name>
  ${UserList({ users }).outerHTML}
`);

export const UserContainer = createComponent(componentName, {
  name: 'eastjun',
  users: [
    { name: 'junil', isActive: true },
    { name: 'eyabc', isActive: false },
  ]
});