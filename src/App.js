import {userContainer} from "./containers/UserContainer.js";
import {todoContainer} from "./containers/TodoContainer.js";

const $app = document.querySelector('#app');

$app.appendChild(userContainer);
$app.appendChild(todoContainer);