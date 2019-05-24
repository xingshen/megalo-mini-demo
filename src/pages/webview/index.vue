<template>
  <web-view :src="webviewUrl"
            @load="handleLoad"
            @error="handleError"
            @message="handleMsg"></web-view>
</template>

<script>
export default {
  data () {
    return {
      webviewUrl: ''
    }
  },
  onLoad (option) {
    Megalo.setNavigationBarTitle({
      title: 'webview'
    })
    this.webviewUrl = decodeURIComponent(option.webviewUrl)
    console.log('webviewUrl:', this.webviewUrl)
  },
  methods: {
    handleLoad (e) {
      console.log('网页加载完成', e)
    },
    handleError (e) {
      console.log(e)
      wx.hideLoading()
    },
    handleMsg (e) {
      let store = e.detail.data[0]
      console.log('我是网页发来的消息', store)
      Megalo.showModal({ title: '选择的门店', content: store.storeName, showCancel: false })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
