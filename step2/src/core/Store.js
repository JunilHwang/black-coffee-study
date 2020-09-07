export const Store = class {

  $state;
  $getters;
  #mutations;
  #actions;
  #observes = new Set();

  constructor({ state, getters = {}, mutations = {}, actions = {} }) {
    this.$state = state;
    this.$getters = Object.entries(getters)
                          .reduce((getters, [key, getter]) => (
                            Object.defineProperty(getters, key, {
                              get: () => getter(this.$state)
                            }), getters), {});
    this.#mutations = mutations;
    this.#actions = actions;
  }

  commit (key, payload) {
    const newState = { ...this.$state };
    this.#mutations[key](newState, payload);
    this.#setState(newState);
  }

  dispatch (key, payload) {
    this.#actions[key]({
      commit: (key, payload) => this.commit(key, payload),
      dispatch: (key, payload) => this.dispatch(key, payload),
      state: { ...this.$state },
    }, payload);
  }

  addObserve (...components) {
    components.forEach(component => this.#observes.add(component));
  }

  #setState (newState) {
    this.$state = { ...newState };
    this.#observes.forEach(observer => observer.validate() && observer.$render());
  }
}