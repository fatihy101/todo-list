<template>
  <div class="todo-item" :class="{success: this.todo.completed}">
    <input
      type="checkbox"
      class="todo-item__checkbox"
      v-model="completed"
      @click="toggleCompleted"
    />
    <p class="todo-item__text" :class="{ completed: this.todo.completed }">
      {{ todo.text }}
    </p>
    <button class="todo-item__delete-button" @click="onDelete">x</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    completed: false,
  }),
  created() {
      this.completed = this.todo.completed
  },
  methods: {
    onDelete() {
      this.$store.dispatch("removeTodo", this.todo)
    },
    toggleCompleted() {
      this.$store.dispatch("updateTodo", { ...this.todo, completed: !this.todo.completed })
    }
  },
}
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
.success {
  background: #a5d6a7 !important;
}
.todo-item {
  display: flex;
  background: #EEE;
  margin: 10px 2vw 10px 1vw;
  border-radius: 30px;
  box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.14);
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  width: 51vw;

  &__text {
    font-weight: 700;
    color: black;
  }

  &__delete-button {
    border: none;
    background: none;
    color: rgb(217, 61, 61);
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>