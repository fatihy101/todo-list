<template>
<!-- USAGE -->
<!-- <Modal @close="modalActive = false" :active="modalActive" v-if="modalActive" /> -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <button class="modal-default-button shadowed-buttonb" @click="$emit('close')">
              x
            </button>
          <div class="modal-header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal-body">
            <slot name="body"> default body </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 500px;
  max-height: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #944D4D;
  border-radius: 25px;
  box-shadow: 3px 6px 5px 2px rgba(0, 0, 0, 0.20);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}


.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  position: relative;
  float: right;
  margin-top: -25px;
  margin-right: -30px;
  border: none;
  background-color: #5b514b;
  color: #F3D0A0;
  font-size: 22px;
  font-weight: bold;
  padding: 0px 6px 4px 6px;
  border-radius: 100px;
  &:hover {
   color: #E9AD59;

  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>