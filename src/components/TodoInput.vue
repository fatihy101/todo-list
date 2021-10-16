<template>
  <div class="todo-input" :class="{ shake: error }">
    <input
      class="todo-input__element"
      type="text"
      v-model="inputValue"
      @keyup.enter="addTodo"
      placeholder="New task"
    />
    <div class="button-container">
      <button class="delete-button" @click="deleteItems" title="Delete All">
        <img class="delete-button__icon" :src="require(`@/assets/icons/trash-bin.svg`)" />
      </button>
      <button class="add-button" @click="addTodo" title="Add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data: () => ({
    inputValue: "",
    error: false,
  }),
  methods: {
    async addTodo() {
      if (this.inputValue !== "") {
        this.$store.dispatch("addTodo", this.inputValue);
        this.inputValue = "";
      } else {
        this.error = true;
        const self = this;
        await new Promise((resolve) => setTimeout(resolve, 1000))
          .then(() => {
            self.error = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async deleteItems() {
      this.$store.dispatch("deleteItems");
    },
  },
};
</script>

<style lang="scss">
.todo-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 10vh;
  background: #a45d5d;
  padding: 20px;
  border-radius: 30px;
  min-width: 50vw;
  box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.14);

  &__element {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    color: #111;
    font-weight: bold;
    background: #efefef;
    border-radius: 30px 0 0 30px;
    transition: all 0.3s ease-in-out;
    border: 0px;
  }
  .button-container {
    position: relative;
    display: inline-block;

    button {
      border: none;
      padding: 10px;
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      color: white;


    }
    .add-button {
      background: #4a403a;
      border-radius: 0 30px 30px 0;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0px 0px 0px 2px #a45d5d;
      &:hover {
        background: #5b514b;
        box-shadow: 0px 0px 0px 0px #a45d5d;
        padding-right: 40px;
      }
    }

    .delete-button {
      border-radius: 0 30px 30px 0;
      background-color: #F1B766;
      color: black;
      font-weight: 100;
      z-index: 0;
      margin-left: 22px;
      padding-left: 15px;
      
      &:hover {
        background-color: #b24040;
      }
    }
  }

  input:focus {
    outline: none !important;
    box-shadow: 0 0 10px #efefef;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  0%, 30%, 50%, 70%, 90% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20%, 40%, 60%, 80% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
}
</style>