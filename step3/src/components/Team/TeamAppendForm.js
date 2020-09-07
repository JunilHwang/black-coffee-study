import {Component} from "../../core/Component.js";
import {ADD_TEAM, SET_OPENED_APPEND_FORM, teamStore} from "../../store/teamStore.js";

export const TeamAppendForm = class extends Component {

  render () {
    const { openedAppendForm } = teamStore.$state;
    return openedAppendForm ? `
      <div class="modal" data-ref="close">
        <div class="modal-box">
          <button type="button" class="modal-close-button" data-ref="close">×</button>
          <h3 class="modal-title">팀 추가하기</h3>
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
    $target.querySelector('.modal-box')?.addEventListener('click', event => {
      if ($target === event.currentTarget) event.stopPropagation();
    });
    $target.querySelector('input')?.focus();
  }

  setEvent () {
    this.addEvent('close', 'click', () => this.#close());
    this.addEvent('team-name', 'keyup', ({ key, target }) => {
      if (key === 'Escape') this.#close();
      if (key === 'Enter') this.#appendTeam(target.value);
    })
  }

  #close () {
    teamStore.commit(SET_OPENED_APPEND_FORM, false);
  }

  async #appendTeam (name) {
    try {
      await teamStore.dispatch(ADD_TEAM, name);
      this.#close();
    } catch (e) {
      console.error(e);
    }
  }
}