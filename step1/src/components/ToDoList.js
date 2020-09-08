import { Component } from "../core/Component.js";
import { toDoStore, SET_EDITING_INDEX, SET_ITEMS } from "../store/toDoStore.js";

const getToDoItemClass = (completed, editing) => editing   ? 'class="editing"'   :
                                                 completed ? 'class="completed"' :
                                                 '';

export const ToDoList = class extends Component{

  #toggle (target) {
    const { items } = toDoStore.$state;
    const index = Number(target.closest('[data-index]').dataset.index);
    const todoItem = items[index];
    todoItem.completed = target.checked;
    items[index] = { ...todoItem };
    toDoStore.commit(SET_ITEMS, [ ...items ]);
  }

  #remove (target) {
    const { items } = toDoStore.$state;
    const index = Number(target.closest('[data-index]').dataset.index);
    items.splice(index, 1);
    toDoStore.commit(SET_ITEMS, [ ...items ]);
  }

  #editing (target) {
    const { items } = toDoStore.$state;
    const index = Number(target.closest('[data-index]').dataset.index);
    const todoItem = items[index];
    todoItem.editing = true;
    items[index] = { ...todoItem };
    toDoStore.commit(SET_ITEMS, [ ...items ]);
    toDoStore.commit(SET_EDITING_INDEX, index);
  }

  #edited (target, key) {
    if (!['Enter', 'Escape'].includes(key)) return;
    const { items } = toDoStore.$state;
    const index = Number(target.closest('[data-index]').dataset.index);
    const todoItem = items[index];
    if (key === 'Enter') {
      todoItem.title = target.value;
    }
    todoItem.editing = false;
    items[index] = { ...todoItem };
    toDoStore.commit(SET_ITEMS, [ ...items ]);
    toDoStore.commit(SET_EDITING_INDEX, -1);
  }

  render () {
    const filteredItems = toDoStore.$getters.filteredItems;
    return filteredItems.map(([ index, { title, completed, editing } ]) => `
      <li ${ getToDoItemClass(completed, editing) } data-index="${index}">
        <div class="view">
          <input class="toggle"
                 data-ref="toggle"
                 type="checkbox"
                 ${completed ? 'checked' : '' } />
          <label class="label" data-ref="contents">${title}</label>
          <button class="destroy" data-ref="delete"></button>
        </div>
        <input class="edit" data-ref="editor" value="${title}" />
      </li>
    `).join('');
  }

  componentDidUpdate () {
    const { editingIndex } = toDoStore.$state;
    this.$target.querySelector(`[data-index="${editingIndex}"] .edit`)?.focus();
  }

  setEvent () {
    this.addEvent('change', 'toggle', ({ target }) => this.#toggle(target))
        .addEvent('click', 'delete', ({ target }) => this.#remove(target))
        .addEvent('dblclick', 'contents', ({ target }) => this.#editing(target))
        .addEvent('keydown', 'editor', ({ target, key }) => this.#edited(target, key))
  }
}