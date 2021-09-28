<template>
  <Navbar />
  <div class="container">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoInput from '@/components/TodoInput.vue'
import Navbar from '@/components/Navbar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoInput,
    Navbar
  },
  methods: {
    ...mapActions({setUserId: 'setUserId'})
  },
  created() {
    this.setUserId()
  }
}
</script>

<style lang="scss">
body {
  background: #FFC069;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: auto auto;
  padding: 0 30px;
}
</style>
