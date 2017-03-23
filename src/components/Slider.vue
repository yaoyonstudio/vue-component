<template>
  <div id="app">
    <div class="sliderContainer">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="slider in data">
          <img :src="slider.src" />  
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slider',
  props: ['data'],
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        onTransitionStart (swiper) {
          // console.log(swiper)
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="scss">
.sliderContainer{
  width: 100%; height: 200px;
  img {
    display: block; width: 100%;
  }
}
</style>
