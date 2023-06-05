import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      login: false,
    }
  },
  mutations: {
    changeLoginStatus(state, status) {
      state.login = status;
      console.log('state.login: ', state.login);
    }
  }
})

export default store;
