import { uuid } from 'vue-uuid'
import TodoRequests from '../utils/TodoRequests'
const apiURL = process.env.VUE_APP_API_URL
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

  async addTodo({ commit, state }, todoText) {
    const newTodo = {
      id: (Math.random() * 100000 + 1).toFixed(0),
      userId: state.userId,
      text: todoText,
      completed: false
    }
    try {
      await TodoRequests.addTodo(apiURL, state.userId, newTodo)
      commit('ADD_TODO', newTodo)
    } catch (error) {
      console.error(error)
    }
  },

  async removeTodo({ commit, state }, todo) {
    try {
      await TodoRequests.deleteTodo(apiURL, state.userId, todo.id)
      commit('REMOVE_TODO', todo)
    } catch (error) {
      console.error(error)
    }
  },

  async updateTodo({ commit, state }, todo) {
    try {
      await TodoRequests.updateTodo(apiURL, state.userId, todo)
      commit('UPDATE_TODO', todo)
    } catch (error) {
      console.error(error)
    }

  },

  clearTodos({ commit }) {
    commit('CLEAR_TODOS')
  },

  async fetchTodos({ commit, state }) {
    try {
      const response = await TodoRequests.getTodos(apiURL, state.userId)
      const todos = JSON.parse(response)
      commit('FETCH_TODOS', todos)
    } catch (error) {
      console.error(error)
    }
  }
}