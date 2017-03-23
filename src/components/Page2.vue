import Vue from 'vue'
const Com = Vue.extend({
  template: `
    <transition name="slideLeft">
      <div id="com" v-if="show" style="position: absolute; width: 100vw; height: 100vh; background-color: #f8f8f8; top: 0; left: 0; display: flex; flex-direction: column; justify-content: space-between;">
        <header style="position: relative; width: 100%; height: 48px; line-height: 48px; background-color: #dd3333; color: #ffffff;">
          <span @click="show = false" style="display: block; position: absolute; left: 0; width:30px; height: 100%; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAArCAYAAACTkhN2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVRIx+3VsQ3CMBBG4Z+MwGYMQTpSsQKdSZNUoU5FSYlEwzJs8SiSwnJ9J9nSXefmfbJl6STjAXrgA5ytwxeycQsDL6/wO8IR5tpcuHyKb3Ph+n9FhBsODy4bZI/n8zMLS+okpex8BEZLQMC9uMESQAD1A2sAJTAXwMMaSAEEYA5MrsDBtL4BN0knSc8/KRgEWHMneQwAAAAASUVORK5CYII=); background-repeat: no-repeat; background-size: 40%; background-position: 12px center;"></span>
          <h3 style="text-align: center; font-weight: normal; font-family: 'Microsoft Yahei'; font-size: 16px;">这是标题</h3>
        </header>
        <section style="flex: 1; width: 100%; overflow-y: scroll;">
          <p>这是内容</p>
          <button style="display: block; width: 100px; height: 28px;" @click="handleClick">事件响应</button>
        </section>
      </div>
    </transition>
  `,
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  }
})

export default Vue.component('Com', Com)
