import Vue from 'vue'
import App from './App'
import Request from './Request'
import KToast from './libs/common/KToast'
Vue.use(KToast)

Vue.mixin({
  data () {
    return {
      Request: Request
    }
  },
  methods: {
    errorHandle (error) {
      console.log(error)
      console.log('出现错误：' + error)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
