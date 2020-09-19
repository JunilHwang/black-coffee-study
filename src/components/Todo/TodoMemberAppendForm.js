import {Component} from "@/core";
import {ADD_TEAM_MEMBER, todoOfTeamStore, SET_OPENED_APPEND_FORM} from "@/store/todoOfTeamStore";

export const TodoMemberAppendForm = class extends Component {

  template () {
    const { openedAppendForm } = todoOfTeamStore.$state;
    return openedAppendForm ? `
      <div class="modal" data-ref="close">
        <div class="modal-box">
          <button type="button" class="modal-close-button" data-ref="close">×</button>
          <h3 class="modal-title">멤버 추가하기</h3>
          <div class="appendForm">
            <input type="text" data-ref="team-name" />
            <button type="button">추가하기</button>
          </div>
        </div>     
      </div>
    ` : '';
  }

  componentDidUpdate () {
    const $target = this.$target;
    const modalBox = $target.querySelector('.modal-box') as HTMLElement;
    const input = $target.querySelector('input') as HTMLInputElement;
    modalBox.addEventListener('click', event => {
      if ($target === event.currentTarget) event.stopPropagation();
    });
    input.focus();
  }

  setEvent () {
    this.addEvent('close', 'click', () => this.#close());
    this.addEvent('team-name', 'keyup', ({ key, target }) => {
      if (key === 'Escape') this.#close();
      if (key === 'Enter') this.#appendTeam(target.value);
    })
  }

  #close () {
    todoOfTeamStore.commit(SET_OPENED_APPEND_FORM, false);
  }

  async #appendTeam (name) {
    try {
      await todoOfTeamStore.dispatch(ADD_TEAM_MEMBER, name);
      this.#close();
    } catch (e) {
      console.error(e);
    }
  }
}