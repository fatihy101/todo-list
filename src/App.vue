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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 960px;
  margin: auto auto;
  padding: 0 15px;
}
</style>
