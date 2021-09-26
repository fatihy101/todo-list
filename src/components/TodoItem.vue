<template>
  <div class="todo-item">
    <input
      type="checkbox"
      class="todo-item__checkbox"
      v-model="completed"
      @click="toggleCompleted"
    />
    <p class="todo-item__text" :class="{ completed: this.todo.completed }">
      {{ todo.text }}
    </p>
    <button class="todo-item__delete-button" @click="onDelete">X</button>
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
      this.$emit("delete", this.todo.id);
    },
    toggleCompleted() {
      this.$emit("toggle", this.todo.id);
    }
  },
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  &__text {
    font-weight: 700;
    color: black;
  }

  &__delete-button {
    border: none;
    background: none;
    color: #ccc;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>