import Vue from 'vue'

const ModalCom = Vue.extend({
  template: `
    <transition name="slideLeft">
      <div class="zkContainer zkModalContainer" v-if="show">
        <div class="zkModalContent" :class="config.class">
          <header class="zkModalHeader" v-if="config.title">
            <span @click="show = false"></span>
            <h3>{{ config.title }}</h3>
          </header>
          <section class="zkModalMain" v-html="config.content"></section>
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
  return new ModalCom({
    data: {
      config: {
        title: config.title,
        content: config.content,
        class: config.class
      }
    }
  }).$mount()
}
