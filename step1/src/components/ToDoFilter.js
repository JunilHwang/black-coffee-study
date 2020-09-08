import { Component } from "../core/Component.js";
import { SET_FILTER_TYPE, toDoStore } from "../store/toDoStore.js";
import FilterTypes from "../constants/FilterTypes.js";

const filterButtons = [
  { type: FilterTypes.ALL, text: '전체보기' },
  { type: FilterTypes.ACTIVE, text: '해야할 일' },
  { type: FilterTypes.COMPLETED, text: '완료한 일' },
];

export const ToDoFilter = class extends Component {

  render () {
    const { filterType } = toDoStore.$state;
    return filterButtons.map(({ type, text }, index) => `
      <li>
        <a data-ref="filter" class="filter-button ${type} ${type === filterType ? 'selected' : ''}"
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