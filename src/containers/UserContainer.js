import {Component} from "../core/Component.js";
import {UserTitle} from "../components/User/UserTitle.js";
import {UserList} from "../components/User/UserList.js";
import {SET_USER, userStore} from "../store/userStore.js";
import {FETCH_ITEMS, SET_LOADING_TYPE, todoStore} from "../store/todoStore.js";
import LoadingTypes from "../constants/LoadingTypes.js";
import {lazyFrame} from "../utils/index.js";

export const UserContainer = class extends Component {

  $children = () => ({
    UserTitle: {
      constructor: UserTitle
    },
    UserList: {
      constructor: UserList,
      props: {
        async loadItemsByUser (index) {
          todoStore.commit(SET_LOADING_TYPE, LoadingTypes.INIT);
          userStore.commit(SET_USER, index);
          const userId = userStore.$getters.selectedUser._id;
          await Promise.all([
            todoStore.dispatch(FETCH_ITEMS, userId),
            lazyFrame(),
          ]);
          todoStore.commit(SET_LOADING_TYPE, LoadingTypes.LOADED);
          history.pushState({ user_id: userId }, null, `./?user_id=${userId}`);
        }
      }
    }
  });

  template () {
    return `      
      <h1 id="user-title" data-component="UserTitle"></h1>
      <section data-component="UserList"></section>
    `;
  }
}
