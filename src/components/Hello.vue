<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="show">showToast</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    show () {
      this.toast('这是一个自动消失的Toast', 2000)
    }
  }
}
</script>

<style scoped lang="scss">
$color: #dd3333;
.hello{
  width: 100%;
  height: 300px;
  background-color: #eee;
}
h1 {
  font-weight: normal;
  color: $color;
}
</style>
