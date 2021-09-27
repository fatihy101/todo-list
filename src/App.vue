<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
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
