<template>
    <div class="todo-input" :class="{'shake': error}">
        <input type="text" v-model="inputValue" @keyup.enter="addTodo" placeholder="New task" >
        <button class="add-button" @click="addTodo">+</button>
    </div>
</template>

<script>
export default {
    name: 'TodoInput',
    data: () => ({
        inputValue: '',
        error: false
    }),
    methods: {
        async addTodo() {
            if(this.inputValue !== '') {
                this.$store.dispatch('addTodo', this.inputValue)
                this.inputValue = ''
            } else {
                this.error = true
                const self = this
                await new Promise((resolve) => setTimeout(resolve, 1000)
                ).then(() => {
                    self.error = false
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style lang="scss">
.todo-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    margin-top: 10vh;
    background: #A45D5D;
    padding: 20px;
    border-radius: 30px;
    width: 50vw;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.14);

    input {
        width: 100%;
        padding: 10px;
        font-size: 1em;
        color: #111;
        font-weight: bold;
        background: #EFEFEF;
        border-radius: 30px 0 0 30px;
        transition: all 0.3s ease-in-out;

    }
    button {
        border: none;
        padding: 10px;
        font-size: 1.1em;
        font-weight: bold;
        border-radius: 0 30px 30px 0;
        background: #4A403A;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

    }
    button:hover {
        background: #5B514B;
    }
    input:focus {
        outline: none !important;
        box-shadow: 0 0 10px #EFEFEF;
    }
}

.shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
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