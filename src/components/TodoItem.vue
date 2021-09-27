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
  background: #EABB78 !important;
}
.todo-item:hover {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.14);

}
.todo-item {
  display: flex;
  background: #EFEFEF;
  margin: 15px 2vw 10px 1vw;
  border-radius: 30px;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.18);
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  width: 51vw;
  transition: all 0.2s ease-in-out;


  &__text {
    font-weight: 700;
    color: black;
    font-size: 1.2rem;
  }
  &__checkbox {
    margin-left: 15px;
    transform: scale(1.4);
  }

  &__delete-button {
    border: none;
    background: none;
    color: #B75A5A;
    font-size: 1.7rem;
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>