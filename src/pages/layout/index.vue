<template>
  <div>
    会用flex布局就够了。<br>参考地址：<span @click="navigate2FlexUrl"
          class="span">点击查看</span>
  </div>
</template>

<script>
export default {

  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '常用布局'
    })
  },
  methods: {
    navigate2FlexUrl () {
      Megalo.navigateTo({ url: '/pages/webview/index?webviewUrl=' + encodeURIComponent('http://www.ruanyifeng.com/blog/2015/07/flex-examples.html') })
    }
  }
}
</script>

<style lang="less" scoped>
.span {
  color: blue;
}
</style>
