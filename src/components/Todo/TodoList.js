import {Component} from "../../core/Component.js";
import {SET_EDITING, todoStore} from "../../store/todoStore.js";
import {userStore} from "../../store/userStore.js";
import LoadingTypes from "../../constants/LoadingTypes.js";
import PriorityTypes from "../../constants/PriorityTypes.js";

const loadingArray = [ ...Array(5).keys() ];

const progressTemplate = `
  <li>
    <div class="view">
      <label class="label">
        <div class="animated-background">
          <div class="skel-mask-container">
            <div class="skel-mask"></div>
          </div>
        </div>
      </label>
    </div>
  </li>
`;

const getItemClass = (completed, editing) => editing   ? ' class="editing"'   :
                                             completed ? ' class="completed"' : '';

export const TodoList = class extends Component {

  componentInit () {
    this.$stores = [ todoStore, userStore ];
    console.log(this.$props);
  }

  template () {
    const { loading, editingIndex } = todoStore.$state;
    const items = todoStore.$getters.filteredItems;
    if (loading === LoadingTypes.INIT) {
      return loadingArray.map(() => progressTemplate).join('')
    }
    return items.map(([ index, { _id, contents, isCompleted, priority, isLoading = false } ]) =>
      isLoading ? progressTemplate : `
      <li ${getItemClass(isCompleted, editingIndex === Number(index))} data-index="${index}">
        <div class="view">
          <input data-ref="toggle" class="toggle" type="checkbox" ${isCompleted ? 'checked' : ''} />
          <label data-ref="contents" class="label">
            ${ priority === PriorityTypes.FIRST ? `<span class="chip primary">1순위</span>` :
               priority === PriorityTypes.SECOND ? `<span class="chip secondary">2순위</span>` : `
              <select data-ref="priority" class="chip select">
                <option value="${PriorityTypes.NONE}" selected>순위</option>
                <option value="${PriorityTypes.FIRST}">1순위</option>
                <option value="${PriorityTypes.SECOND}">2순위</option>
              </select>`}
            ${contents}
          </label>
          <button data-ref="destroy" class="destroy"></button>
        </div>
        <input data-ref="editor" class="edit" value="${contents}" />
      </li>
    `).join('');
  }

  setEvent () {
    this.addEvent('click', 'destroy', ({  index }) => this.$props.removeItem(index));
    this.addEvent('change', 'toggle', ({  index }) => this.$props.toggleItem(index));
    this.addEvent('change', 'priority', ({ target, index }) => {
      this.$props.selectPriority(index, target.value);
    });
    this.addEvent('dblclick', 'contents', ({ index }) => todoStore.commit(SET_EDITING, index));
    this.addEvent('keydown', 'editor', ({ key }) => {
      if (key !== 'Escape') return;
      todoStore.commit(SET_EDITING, -1);
    });
    this.addEvent('keypress', 'editor', ({ key, target }) => {
      if (key !== 'Enter') return;
      this.$props.updateItem(target.value);
    });
  }
}