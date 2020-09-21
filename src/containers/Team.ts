import {Component} from "../core/Component";
import {TeamList} from "../components/Team/TeamList";
import {FETCH_TEAMS, teamStore} from "../store/teamStore";
import {TeamAppendForm} from "../components/Team/TeamAppendForm";

export const Team = class extends Component<{}> {

  template () {
    return `
      <h1 id="user-title" data-username="eastjun">
        <span><strong>Team</strong>'s Todo Lists</span>
      </h1>
      <div class="team-list-container"></div>
      <div id="team-append-form"></div>
    `;
  }

  componentDidMount () {
    const $teamListContainer = document.querySelector('.team-list-container');
    const $teamAppendForm = document.querySelector('#team-append-form');
    const teamList = new TeamList($teamListContainer);
    const teamAppendForm = new TeamAppendForm($teamAppendForm);
    teamStore.addObserve(teamList, teamAppendForm);
    teamStore.dispatch(FETCH_TEAMS);
  }
}