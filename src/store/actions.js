import { uuid } from 'vue-uuid';

export default {
    setUserId({ commit }) {
        // check if userId is exists on localStorage
        const userId = localStorage.getItem('userId')
        if (userId) {
          // TODO: Check userId is valid
          commit('SET_USER_ID', localStorage.getItem('userId'))
        } else {
          // create new userId and save localStorage
          const userId = 'Do' + uuid.v4() + 'tO'
          localStorage.setItem('userId', userId)
          commit('SET_USER_ID', userId)
        }
      },
      addTodo({ commit, state }, todoText) {
        commit('ADD_TODO', {
          id: (Math.random() * 100000 + 1).toFixed(0),
          userId: state.userId,
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
}