import {Store} from "@/core";
import {TeamService} from "@/services";
import {SET_OPENED_APPEND_FORM} from "./index";
import {TodoTeam} from "@/domains";

export const SET_TEAMS = 'SET_TEAMS';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const ADD_TEAM = 'ADD_TEAM';

export interface TeamState {
  teams: TodoTeam[];
  openedAppendForm: boolean;
}

export const teamStore = new Store<TeamState>({

  state: {
    teams: [],
    openedAppendForm: false,
  },

  mutations: {

    [SET_TEAMS] (state, teams: TodoTeam[]) {
      state.teams = teams;
    },

    [SET_OPENED_APPEND_FORM] (state, openedAppendForm: boolean) {
      state.openedAppendForm = openedAppendForm;
    },

  },

  actions: {

    async [FETCH_TEAMS] ({ commit }) {
      commit(SET_TEAMS, await TeamService.fetchTeams());
    },

    async [ADD_TEAM] ({ dispatch }, name: string) {
      await TeamService.addTeam(name);
      return dispatch(FETCH_TEAMS);
    },

  },

});
