<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id"
      :todo="todo"
    />
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
  background-color: #fff;
  height: 70vh;
  border-radius: 30px;
  padding: 20px;
  width: 55vw;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 6pt 10pt 1pt 0 rgba(0, 0, 0, 0.12);
}
</style>