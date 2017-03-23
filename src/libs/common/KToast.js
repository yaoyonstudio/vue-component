import toastInit from './components/Toast'
import alertInit from './components/Alert'
import confirmInit from './components/Confirm'
import modalInit from './components/Modal'

const KToast = {
  install (Vue, options) {
    Vue.mixin({
      data () {
        return {
        }
      },
      mounted () {
      },
      methods: {
        toast (msg, timeout) {
          let Toast = toastInit(msg, timeout)
          this.$el.appendChild(Toast.$el)
        },
        alert (config) {
          let Alert = alertInit(config)
          this.$el.appendChild(Alert.$el)
        },
        confirm (config) {
          let Confirm = confirmInit(config)
          this.$el.appendChild(Confirm.$el)
        },
        modal (config) {
          let Modal = modalInit(config)
          this.$el.appendChild(Modal.$el)
        },
        // 两种方式创建整页弹框
        // 第一种：用Vue.extend定义页面
        show (Page) {
          let Com = new Page().$mount()
          setTimeout(function () {
            if (Com.$el) {
              Com.$el.style.overflow = 'hidden'
            }
          }, 500)
          this.$el.appendChild(Com.$el)
        },
        // 第二种：直接引用单文件组件
        showComponent (Com) {
          let that = this
          let div = document.createElement('div')
          div.id = 'zhCom'
          this.$el.appendChild(div)
          /* eslint-disable no-new */
          new Vue({
            el: '#zhCom',
            // render: h => h(Com, {
            //   'style': {
            //     overflow: 'hidden'
            //   }
            // })
            render (h) {
              console.log(Com)
              return h(Com, {
                'style': {
                  'overflow': 'hidden'
                }
              })
            }
          })
          setTimeout(function () {
            that.$el.lastChild.style.overflow = 'hidden'
          }, 500)
        }
      }
    })
  }
}
export default KToast
