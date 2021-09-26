import { createStore } from 'vuex'

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  REMOVE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  UPDATE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1, todo)
  },
  CLEAR_TODOS(state) {
    state.todos = []
  },
  FETCH_TODOS(state, todos) {
    state.todos = todos
  }
}

export default createStore({
  state: {
    todos: []
  },
  mutations: mutations,
  actions: {
  },
  modules: {
  }
})
