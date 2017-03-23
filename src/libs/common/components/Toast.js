import Vue from 'vue'
// Toast组件定义
const ToastCom = Vue.extend({
  template: `
    <transition name="fade">
      <div class="zkContainer zkToastContainer" v-if="show" @click="show = false">
        <div class="zkToastContent" :style="{ width: toastStyle.toastWidth + 'px', marginLeft: toastStyle.leftOffset + 'px'}">
          {{ msg }}
        </div>
      </div>
    </transition>
  `,
  props: ['msg', 'timeout'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    toastStyle () {
      if (this.msg && this.msg.length) {
        let msgLength = this.msg.length * 16
        if (msgLength > 300) {
          return {
            toastWidth: 300,
            leftOffset: -150
          }
        } else {
          return {
            toastWidth: msgLength,
            leftOffset: -msgLength / 2
          }
        }
      } else {
        return 0
      }
    }
  },
  mounted () {
    let that = this
    this.show = true
    if (this.timeout && !isNaN(this.timeout) && this.timeout > 0) {
      setTimeout(function () {
        that.show = false
      }, this.timeout)
    }
  }
})

export default function (msg, timeout) {
  return new ToastCom({
    data: {
      msg: msg,
      timeout: timeout
    }
  }).$mount()
}
