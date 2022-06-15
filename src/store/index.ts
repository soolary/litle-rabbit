import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: '张三'
  },
  getters: {
    newName (state) {
      return state.userName + '!!!'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
