<template>
  <div class="todo-list">
    <div v-if="todos.length !== 0">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-else class="no-item">
        <p class="no-item__text">Your todo list is empty. Add new todos!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
      ...mapGetters({todos: "todos"})
  }
}
</script>

<style lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  background-color: #A45D5D;
  height: 60vh;
  border-radius: 30px;
  padding: 20px;
  width: 55vw;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 6pt 10pt 1pt 0 rgba(0, 0, 0, 0.12);
}

.no-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    &__text {
        font-size: 1.5rem;
        color: #ececec;
        font-weight: 600;
    }
}
</style>