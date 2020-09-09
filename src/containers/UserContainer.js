import {createComponent, defineComponent} from "../core/Component.js";

const UserContainer = 'user-container';

defineComponent({ name: UserContainer }, () => `
  <h1 id="user-title" data-username="eastjun">
    <span><strong>eastjun</strong>'s Todo List</span>
  </h1>
  <section>
    <div id="user-list">
      <button class="ripple active">eastjun</button>
      <button class="ripple">westjun</button>
      <button class="ripple">southjun</button>
      <button class="ripple">northjun</button>
      <button class="ripple">hojun</button>
      <button class="ripple user-create-button">+ 유저 생성</button>
    </div>
  </section>
`);

export const userContainer = createComponent(UserContainer)