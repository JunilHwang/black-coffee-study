import {Component} from "../../core/Component.js";
import {todoOfTeamStore} from "../../store/todoOfTeamStore.js";
import {TodoListFooter} from "./TodoListFooter.js";

export const TodoList = class extends Component {

  get #member () {
    return todoOfTeamStore.$state.members[this.$props.id];
  }

  render () {
    return `
      <h2>
        <span><strong>${this.#member.name}</strong>'s Todo List</span>
      </h2>
      <div class="todoapp">
        <section class="input-container">
          <input class="new-todo" placeholder="할 일을 입력해주세요." autofocus />
        </section>
        <section class="main">
          <ul class="todo-list">
            <li class="todo-list-item">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">
                  <div class="chip-container">
                    <select class="chip select">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  해야할 아이템
                </label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="완료된 타이틀" />
            </li>
            <li class="todo-list-item">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">
                  <div class="chip-container">
                    <select class="chip select">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  해야할 아이템
                </label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="완료된 타이틀" />
            </li>
            <li class="todo-list-item">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">
                  <div class="chip-container">
                    <span class="chip primary">1순위</span>
                    <select class="chip select hidden">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  <span class="todo-item-text">해야할 아이템</span>
                </label>
                <button class="delete"></button>
              </div>
              <input class="edit" value="완료된 타이틀" />
            </li>
            <li class="todo-list-item">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">
                  <div class="chip-container">
                    <span class="chip secondary">1순위</span>
                    <select class="chip select hidden">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  해야할 아이템
                </label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="완료된 타이틀" />
            </li>
            <li class="todo-list-item completed">
              <div class="view">
                <input class="toggle" type="checkbox" checked />
                <label class="label">
                  <div class="chip-container">
                    <span class="chip primary">1순위</span>
                    <select class="chip select hidden">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  완료된 아이템
                </label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="완료된 타이틀" />
            </li>
            <li class="todo-list-item editing">
              <div class="view">
                <input class="toggle" type="checkbox" checked />
                <label class="label">
                  <div class="chip-container">
                    <span class="chip primary">1순위</span>
                    <select class="chip select hidden">
                      <option value="0" selected>순위</option>
                      <option value="1">1순위</option>
                      <option value="2">2순위</option>
                    </select>
                  </div>
                  수정중인 아이템
                </label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="수정중인 타이틀" />
            </li>
          </ul>
        </section>
        <div id="todo-list-footer" class="count-container"></div>
      </div>
    `;
  }

  componentDidMount () {
    const $todoListFooter = this.$target.querySelector('#todo-list-footer');
    new TodoListFooter($todoListFooter, { id: this.$props.id });
  }
}