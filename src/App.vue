<template>
  <Navbar @openModal="modalActive = true" />
  <div class="container">
    <TodoInput />
    <TodoList />
  </div>
  <Modal v-if="modalActive" @close="modalActive = false" > 
    <template v-slot:header>
      <p id="modal-user-id" class="shadowed-button" title="Copy UserID">
        USER ID: {{ userId }}
      </p>
    </template>

    <template v-slot:body>
      <h3></h3>
    </template>
  </Modal>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoInput from '@/components/TodoInput.vue'
import Navbar from '@/components/Navbar.vue'
import Modal from '@/components/Modal.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoInput,
    Navbar,
    Modal
  },
  methods: {
    ...mapActions({setUserId: 'setUserId'}),
    copyToClipboard() {
      const el = document.getElementById('#modal-user-id')
      el.select()
      document.execCommand('copy')
    }
  },
  data: () => ({
    modalActive: false
  }),
  created() {
    this.setUserId()
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@500&display=swap');

body {
  background: #FFC069;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
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

#modal-user-id {
  margin-top: 0;
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  font-size: 26px;
  background: #5B514B57;
  border-radius: 30px;
  user-select: none;
  
}

.shadowed-button {
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.20);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.20);
  }
}
</style>
