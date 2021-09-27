import { createStore } from 'vuex'

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  REMOVE_TODO(state, todo) {
    state.todos.splice(state.todos.findIndex((item) => todo.id === item.id), 1)
  },
  UPDATE_TODO(state, todo) {
    state.todos.splice(state.todos.findIndex((item) => todo.id === item.id), 1, todo)
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
    todos: [
      {id: 1, text: 'Learn Vue', completed: false},
      {id: 2, text: 'Learn Vuex', completed: false},
      {id: 3, text: 'Learn Vue Router', completed: false},
      {id: 4, text: 'Learn Vuex Router', completed: false},
      {id: 5, text: 'Learn Vuex Router', completed: false},
      {id: 6, text: 'Learn Vuex Router', completed: false}
    ]
  },
  mutations: mutations,
  actions: {
    addTodo({ commit }, todoText) {
      commit('ADD_TODO', {
        id: Math.random() * 100000 + 1,
        text: todoText,
        completed: false
      })
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    updateTodo({ commit }, todo) {
      commit('UPDATE_TODO', todo)
    },
    clearTodos({ commit }) {
      commit('CLEAR_TODOS')
    },
    fetchTodos({ commit }, todos) {
      commit('FETCH_TODOS', todos)
    }
  },
  getters: {
    todos: state => state.todos
  },
  modules: {
  }
})
