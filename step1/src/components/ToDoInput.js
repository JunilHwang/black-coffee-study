import { Component } from "../core/Component.js";
import { toDoStore, SET_ITEMS } from "../store/toDoStore.js";

export const ToDoInput = class extends Component {

  setEvent () {
    this.addEvent('keypress', ({ key, target }) => {
      if (key === 'Enter') {
        this.#addItem(target.value);
        target.value = '';
      }
    })
  }

  #addItem (itemTitle) {
    toDoStore.commit(SET_ITEMS, [
      ...toDoStore.$state.items,
      { title: itemTitle, completed: false, editing: false }
    ]);
  }

}