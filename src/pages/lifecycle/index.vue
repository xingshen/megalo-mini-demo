<template>
  <div class="container">
    {{lifecycleCall}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      lifecycleCall: ''
    }
  },
  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '生命周期函数'
    })
    this.lifecycleCall += 'onLoad-->  '
  },
  onShow () {
    this.lifecycleCall += 'onShow-->  '
  },
  onReady () {
    this.lifecycleCall += 'onReady-->  '
  },
  onHide () {
    this.lifecycleCall += 'onHide-->  '
  },
  onUnload () {
    this.lifecycleCall += 'onUnload-->  '
  },
  created () {
    this.lifecycleCall += 'created-->  '
  },
  mounted () {
    this.lifecycleCall += 'mounted-->  '
  },
  updated () {
    console.log('updated')
    // 有ui刷新时会调用这里
    // 千万不要在这里做刷新UI的操作，会造成死循环
    // this.lifecycleCall += 'updated-->'
  },
  destroyed () {
    this.lifecycleCall += 'destroyed-->'
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 10rpx;
}
</style>
