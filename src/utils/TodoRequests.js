import axios from 'axios'

class TodoRequests {
    static createHeaders(userId) {
        return {
            'Accept': 'application/json',
            'X-User-Id': userId
        }
    }

  static getTodos(baseUrl, userId) {
    return axios.get(`${baseUrl}/todos`, {
        headers: this.createHeaders(userId),
        validateStatus: function (status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        },
    })
  }

  static addTodo(baseUrl, userId, todo) {
    return axios.post(`${baseUrl}/todos`, todo, {
        headers: this.createHeaders(userId)
    })
  }

  static updateTodo(baseUrl, userId, todo) {
    return axios.put(`${baseUrl}/todos`, todo, {
        headers: this.createHeaders(userId)
    })
  }

  static deleteTodo(baseUrl, userId, itemId) {
    return axios.delete(`${baseUrl}/todos/${itemId}`, {
        headers: this.createHeaders(userId)
    })
  }
}

export default TodoRequests