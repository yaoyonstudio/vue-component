<template>
  <div id="app">
    <!-- <slider :data="sliders"></slider> -->
    <!-- <datepicker-demo></datepicker-demo> -->
    <!-- <select-industry></select-industry>   -->
    <!-- <hello></hello> -->
    <section>
      <button @click="showToast">Basic Toast</button>
      <button @click="showAutoToast">AutoClose Toast</button>
    </section>
    <section>
      <button @click="showAlert">Basic Alert</button>
      <button @click="showAlertWithStyle">Alert with Style</button>
    </section>
    <section>
      <button @click="showConfirm">Basic Confirm</button>
      <button @click="showConfirmAllCallback">Confirm with All Callback</button>
    </section>
    <section>
      <button @click="showModal">Basic Modal</button>
    </section>
    <section>
      <button @click="showPage">Custom Page</button>  
      <button @click="showCom">Custom Com</button>  
    </section>
  </div>
</template>

<script>
// import Vue from 'vue'
import Hello from './components/Hello'
import Slider from './components/Slider'
import SelectIndustry from './components/SelectIndustry'
import DatepickerDemo from './components/Datepicker'

import Page from './components/Page.js'
import ModalPage from './components/ModalPage'

export default {
  name: 'app',
  data () {
    return {
      sliders: []
    }
  },
  computed: {
  },
  mounted () {
    // console.log(this)
    // this.Request.public.getSliders(null, this.getData, this.errorHandle)
  },
  components: {
    Hello,
    Slider,
    SelectIndustry,
    DatepickerDemo
  },
  methods: {
    getData (data) {
      this.sliders = data
    },
    showToast () {
      this.toast('这是一个Toast')
    },
    showAutoToast () {
      this.toast('这是一个自动消失的Toast', 2000)
    },
    showAlert () {
      this.alert({
        title: '提示',
        msg: '这里是提示内容',
        button: '确定'
      })
    },
    showAlertWithStyle () {
      this.alert({
        title: '提示信息',
        msg: '这里是<span style="color: #dd3333;">HTML标签</span>提示内容',
        class: 'myAlert',
        button: '确定'
      })
    },
    showConfirm () {
      this.confirm({
        title: '提示信息',
        msg: '这里是<span style="color: #dd3333;">HTML标签</span>提示内容',
        confirmCallback: function () {
          console.log('you click confirm button')
        }
      })
    },
    showConfirmAllCallback () {
      this.confirm({
        title: '提示信息',
        msg: '这里是<span style="color: #dd3333;">HTML标签</span>提示内容',
        cancelCallback: function () {
          console.log('you click cancel button')
        },
        confirmCallback: function () {
          console.log('you click confirm button')
        }
      })
    },
    showModal () {
      this.modal({
        title: 'Modal标题',
        content: '这里是Modal的主要内容'
      })
    },
    showPage () {
      this.show(Page)
    },
    showCom () {
      this.showComponent(ModalPage)
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  section{
    display: flex;
    align-item: center;
    padding: 10px 10px; 
    button{padding: 6px 10px; margin: 0 5px;}
  }
  .myAlert {
    .zkAlertHeader{
      color: #0a8acd;
      border-bottom-color: #0a8acd;
    }
    .zkAlertMain{
      text-align: left;
      span{display: inline-block;}
    }
    .zkAlertFooter{
      button{
        background-color: #0a8acd;
      }
    }
  }
}
</style>
