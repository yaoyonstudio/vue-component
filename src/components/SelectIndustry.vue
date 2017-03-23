<template>
  <div class="industryContainer">
    <section class="left">
      <ul>
          <li v-for="item in industryData" :class="{'active': item.id === currentItem.id}" @click="selectIndustryItem(item)">{{ item.title }}</li>
      </ul>
    </section>
    <section class="right">
      <ul>
          <li v-for="subItem in subItemData" :class="{'subActive': subItem.id === selectedItem.id}" @click="selectedItem = subItem">{{ subItem.title }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SelectIndustry',
  data () {
    return {
      industryData: [],
      currentItem: null,
      selectedItem: null
    }
  },
  mounted () {
    this.Request.public.getIndustryData(null, this.getData, this.errorHandle)
  },
  computed: {
    subItemData () {
      if (this.currentItem) {
        return this.currentItem.sub
      }
    }
  },
  methods: {
    getData (data) {
      this.industryData = data
      this.currentItem = this.industryData[0]
      this.selectedItem = this.currentItem.sub[0]
    },
    selectIndustryItem (item) {
      this.currentItem = item
      this.selectedItem = item.sub[0]
    }
  }
}
</script>

<style scoped lang="scss">
.industryContainer{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  section{
    width: 100%;
    height: 100vh;
    ul{
      width: 100%;
      li{
        list-style: none;
        padding: 0 8px;
        text-align: left;
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 1px solid #eee;
        font-size: 12px;
        display: inline-block;
        width: 100%;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  section.left{
    width: 35vw;
    border-right: 1px solid #ddd;
  }
  section.right{
    height: 65vw;
  }
  .active{
    border-left: 3px solid #dd3333;
    color: #dd3333;
  }
  .subActive{
    border-bottom-color: #dd3333;
    color: #dd3333;
  }
}
</style>
