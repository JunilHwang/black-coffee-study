import {UserContainer} from "./containers/UserContainer.js";
import {TodoContainer} from "./containers/TodoContainer.js";

const $app = document.querySelector('#app');

$app.append(UserContainer, TodoContainer);