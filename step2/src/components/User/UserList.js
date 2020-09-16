import {Component} from "../../core/Component.js";
import {ADD_USER, userStore} from "../../store/userStore.js";

export const UserList = class extends Component {

  template () {
    const { users, selectedIndex } = userStore.$state;
    return `
      ${users.map(({ name }, index) => `
        <button
          data-ref="select"
          data-index="${index}"
          class="ripple ${index === selectedIndex ? 'active' : ''}">
          ${name}
        </button>
      `).join('')}
      <button data-ref="appender" class="ripple user-create-button">+ 유저 생성</button>
    `;
  }

  setEvent () {
    this.addEvent('click', 'select', ({ index }) => {
      this.$props.loadItemsByUser(index);
    })
    this.addEvent('click', 'appender', () => {
      const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
      userStore.dispatch(ADD_USER, userName);
    })

  }
}
