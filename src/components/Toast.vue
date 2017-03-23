<template>
  <transition name="fade">
    <div class="toastContainer" @click="closeToast">
      <div id="toastContent" class="toastContent" :style="{width: width > 300 ? 300 : width + 'px', marginLeft: (width > 300 ? -150 : -width/2) + 'px'}">
        {{ msg }}
      </div>
      <p>{{ test }}-{{ msg }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  computed: {
    width () {
      return this.msg.length * 24
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    closeToast () {
      this.$parent.showToast = false
    }
  }
}
</script>

<style scoped lang="scss">
.toastContainer{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.toastContent{
  background-color: rgba(0, 0, 0, .5);
  padding: 10px;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 300px;
  z-index: 9999999;
  border-radius: 4px;
  word-wrap: break-word; 
  word-break: normal; 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
