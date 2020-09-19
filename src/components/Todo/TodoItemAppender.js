import {Component} from "../../core/Component.js";
import {todoOfTeamStore} from "../../store/todoOfTeamStore";

export const TodoItemAppender = class extends Component {
  render () {
    return `
      <input class="new-todo" placeholder="할 일을 입력해주세요." data-ref="appender" autofocus />
    `;
  }

  setEvent () {
    this.addEvent('appender', 'keyup', ({ key, target }) => {
      if (key === 'Enter') {
        todoOfTeamStore.dispatch()
      }
    });
  }
}