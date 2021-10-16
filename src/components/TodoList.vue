<template>
  <div class="todo-list">
    <draggable
      v-if="todos.length !== 0"
      v-model="todoItems"
      group="todos"
      item-key="id"
    >
      <template #item="{ element }">
        <TodoItem :todo="element" />
      </template>
    </draggable>
    <div v-else class="no-item">
      <p class="no-item__text">Your todo list is empty. Add new todos!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import draggable from "vuedraggable";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    draggable,
  },
  computed: {
    ...mapGetters({ todos: "todos" }),
    todoItems: {
      get() {
        return this.todos;
      },
      set(newTodos) {
        newTodos.forEach((todo) => {
          const index =  newTodos.findIndex((item) => item.id === todo.id)
          newTodos[index].order = index
        })
        console.log(JSON.stringify(newTodos));
        this.$store.dispath("updateTodos", newTodos); // TODO implement this
      },
    },
  },
  methods: {
    onEnd(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a45d5d;
  height: 60vh;
  border-radius: 30px;
  padding: 20px;
  max-width: 75vw;
  min-width: 50vw;
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