import Vue from 'vue'

const AlertCom = Vue.extend({
  template: `
    <transition name="bounce">
      <div class="zkContainer zkAlertContainer" v-if="show">
        <div class="zkAlertContent" :class="config.class">
          <header class="zkAlertHeader" v-if="config.title">
            <h3>{{ config.title }}</h3>
          </header>
          <section class="zkAlertMain" v-html="config.msg"></section>
          <footer class="zkAlertFooter">
            <button @click="show = false">{{ config.button }}</button>
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
  return new AlertCom({
    data: {
      config: {
        title: config.title,
        msg: config.msg,
        class: config.class,
        button: config.button
      }
    }
  }).$mount()
}
