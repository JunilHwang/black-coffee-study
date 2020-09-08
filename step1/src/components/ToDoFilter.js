import { Component } from "../core/Component.js";
import { SET_FILTER_TYPE, toDoStore } from "../store/toDoStore.js";
import FilterTypes from "../constants/FilterTypes.js";

const filterButtons = {
  [FilterTypes.ALL]: '전체보기',
  [FilterTypes.ACTIVE]: '해야할 일',
  [FilterTypes.COMPLETED]: '완료한 일',
}

export const ToDoFilter = class extends Component {

  render () {
    const { filterType } = toDoStore.$state;
    return Object.entries(filterButtons).map(([ type, text ]) => `
      <li>
        <a data-ref="filter"
           class="filter-button ${type} ${type === filterType ? 'selected' : ''}"
           href="#"
           data-filter-type="${type}">
          ${text}
        </a>
      </li>
    `).join('');
  }

  setEvent () {
    this.addEvent('click', 'filter', e => {
      e.preventDefault();
      toDoStore.commit(SET_FILTER_TYPE, e.target.dataset.filterType);
    });
  }
}