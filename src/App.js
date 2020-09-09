import {userContainer} from "./containers/UserContainer.js";
import {todoContainer} from "./containers/TodoContainer.js";

document.querySelector('#app').innerHTML = `
  ${userContainer.outerHTML}
  ${todoContainer.outerHTML}
`;