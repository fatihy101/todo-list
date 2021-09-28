export default {
    SET_USER_ID: (state, userId) => {
        state.userId = userId
    },
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