import './containers/UserContainer.js';
import './containers/TodoContainer.js';

document.querySelector('#app').innerHTML = `
  <user-container></user-container>
  <todo-container></todo-container>
`;