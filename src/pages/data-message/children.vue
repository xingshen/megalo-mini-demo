<template>
  <div>
    <div style="margin: 20rpx">
      <span>前页面传过来的数据：{{data}}</span>
      <input type="text"
             v-model="inputData"
             placeholder="请输入返回参数">
      <button @click="close">关闭并返回数据</button>
    </div>

  </div>
</template>

<script>
import store from './store'

export default {
  store,
  data () {
    return {
      data: '',
      inputData: ''
    }
  },
  onLoad (option) {
    this.data = option.data
  },
  methods: {
    close () {
      store.commit('saveVuexData', { value: this.inputData })
      Megalo.setStorageSync('nextData', this.inputData)
      Megalo.navigateBack()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
