import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 1. globalなステート
  state: {
    globalCount: 0
  },
  // 2. stateへの書き込みは
  // mutationsの中でしか行わない
  // 第一引数は必ずstate
  mutations: {
    globalIncrement(state){
      state.globalCount++
    },
    setGithubProfile(state, payload){
      state.profile = payload;
    }
  },
  actions: {
    async fetchGithubProfile(store, payload){
      
      if (store.state.profile != null) {
        console.log(store.state.profile)
        return;
      }

      const response = await fetch(
        `https://api.github.com/users/${payload.user_id}`).then((res) => {
        return res.json();
      });
      store.commit("setGithubProfile", response);
    }
  },
  modules: {
  }
})
