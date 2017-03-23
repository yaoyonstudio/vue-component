<template>
  <div>
    <label>
      日期：<datepicker placeholder="请输入日期"></datepicker>
    </label>
    <label>
      日期：<datepicker language="zh"></datepicker>
    </label>
    <label>
      日期：<datepicker v-on:selected="selected" v-on:opened="opened"></datepicker>
    </label>
    <label>
      日期：<datepicker :value="date1"></datepicker>
    </label>
    <label>
      日期：<datepicker v-model="date2"></datepicker>
      已选择日期：{{date2}}
    </label>
    <label>
      日期：
      <datepicker v-model="date3" :inline="true" format="yyyy-MM-dd"></datepicker>
      已选择日期：{{date3}}
    </label>
    <label>
      日期：
      <datepicker v-model="date4" format="yyyy-MM-dd" :disabled="disabled"></datepicker>
      已选择日期：{{date3}}
    </label>
    <label>
      日期：
      <datepicker v-model="date4" format="yyyy-MM-dd" :highlighted="highlighted"></datepicker>
      已选择日期：{{date3}}
    </label>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'myDatepicker',
  data () {
    return {
      date1: new Date(2017, 3, 21),
      date2: new Date(2017, 2, 28),
      date3: null,
      date4: null,
      disabled: {
        to: new Date(2017, 0, 5), // Disable all dates up to specific date
        from: new Date(2017, 5, 26), // Disable all dates after specific date
        days: [6, 0], // Disable Saturday's and Sunday's
        dates: [ // Disable an array of dates
          new Date(2017, 2, 25),
          new Date(2017, 2, 26),
          new Date(2017, 2, 27)
        ]
      },
      highlighted: {
        to: new Date(2016, 0, 5), // Highlight all dates up to specific date
        from: new Date(2016, 0, 26), // Highlight all dates after specific date
        days: [6, 0], // Highlight Saturday's and Sunday's
        dates: [ // Highlight an array of dates
          new Date(2017, 3, 5),
          new Date(2017, 3, 6),
          new Date(2016, 3, 7)
        ]
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    opened () {
      console.log('opened')
    },
    selected () {
      console.log('selected')
    }
  },
  components: {
    Datepicker
  }
}
</script>

<style scoped lang="scss">
label{
  display: block; margin: 10px 0; border-bottom: 1px solid #ddd; padding: 10px;
}
</style>
