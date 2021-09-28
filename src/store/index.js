import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state: {
    todos: [],
    userId: null
  },
  mutations: mutations,
  actions: actions,
  getters: {
    todos: state => state.todos,
    userId: state => state.userId
  },
  modules: {
  }
})
