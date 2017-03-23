import Vue from 'vue'

const ConfirmCom = Vue.extend({
  template: `
    <transition name="bounce">
      <div class="zkContainer zkConfirmContainer" v-if="show">
        <div class="zkConfirmContent" :class="config.class">
          <header class="zkConfirmHeader" v-if="config.title">
            <h3>{{ config.title }}</h3>
          </header>
          <section class="zkConfirmMain" v-html="config.msg"></section>
          <footer class="zkConfirmFooter">
            <button @click="config.cancelCallback(); show = false">{{ config.buttons[0].title }}</button>
            <button @click="config.confirmCallback(); show = false">{{ config.buttons[1].title }}</button>
          </footer>
        </div>
      </div>
    </transition>
  `,
  props: ['config'],
  mounted () {
    this.show = true
  },
  data () {
    return {
      show: false
    }
  }
})

export default function (config) {
  return new ConfirmCom({
    data: {
      config: {
        title: config.title,
        msg: config.msg,
        class: config.class,
        buttons: [
          {
            type: 'cancel',
            title: '取消'
          },
          {
            type: 'confirm',
            title: '确认'
          }
        ],
        cancelCallback: config.cancelCallback ? config.cancelCallback : function () {},
        confirmCallback: config.confirmCallback ? config.confirmCallback : function () {}
      }
    }
  }).$mount()
}
