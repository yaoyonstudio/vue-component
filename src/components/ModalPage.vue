<template>
  <transition name="slideLeft">
    <div v-if="show" class="modalPageContainer">
      <header class="modalPageHeader">
        <span @click="show = false"></span>
        <h3>{{ title }}</h3>
      </header>
      <div class="modalPageContent">
        Content
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalPage',
  data () {
    return {
      show: false,
      title: 'ModalPage'
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.modalPageContainer{
  width: 100vw; height: 100vh; position: absolute; top: 0; left: 0; display: flex; flex-direction: column; justify-content: space-between;
}
.modalPageHeader{
  width: 100%; height: 48px; background-color: #dd3333; position: relative;
  span{display: block; position: absolute; left: 0; width:30px; height: 100%; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAArCAYAAACTkhN2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVRIx+3VsQ3CMBBG4Z+MwGYMQTpSsQKdSZNUoU5FSYlEwzJs8SiSwnJ9J9nSXefmfbJl6STjAXrgA5ytwxeycQsDL6/wO8IR5tpcuHyKb3Ph+n9FhBsODy4bZI/n8zMLS+okpex8BEZLQMC9uMESQAD1A2sAJTAXwMMaSAEEYA5MrsDBtL4BN0knSc8/KRgEWHMneQwAAAAASUVORK5CYII=); background-repeat: no-repeat; background-size: 40%; background-position: 12px center;}
  h3 {text-align: center; color: #fff; height: 48px; line-height: 48px; }
}
.modalPageContent{
  flex: 1; width: 100%; background-color: #f8f8f8; overflow-y: scroll;
}
</style>
