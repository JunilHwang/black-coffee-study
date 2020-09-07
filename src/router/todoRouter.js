import { Router } from "../core/Router.js";
import {Team} from "../containers/Team.js";
import {Kanban} from "../containers/Kanban.js";

const $app = document.querySelector('#app');
export const todoRouter = new Router(({ params, uri }) => {
  if (uri.indexOf('index') === 0 || uri.length === 0) {
    return new Team($app, params);
  }
  if (uri.indexOf('kanban') === 0) {
    return new Kanban($app, params);
  }
});