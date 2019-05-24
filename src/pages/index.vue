<template>
  <div class="container">
    <div class="index-head">
      <img src="https://cdn.leoao.com/logo.png"
           alt>
      <p>小程序开发分享开始啦</p>
    </div>

    <div class="index-item-list">
      <div v-for="(item,index) in list"
           :key="index"
           class="index-item"
           v-on:click="navigateItem(item)">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        text: '页面生命周期',
        url: '/pages/lifecycle/index'
      },
      {
        text: '常用组件',
        url: '/pages/widgets/index'
      }, {
        text: '常用布局',
        url: '/pages/layout/index'
      },
      {
        text: '页面间通信',
        url: '/pages/data-message/index'
      },
      {
        text: '弹窗',
        url: '/pages/dialog/index'
      },
      {
        text: '权限管理',
        url: '/pages/permission/index'
      },
      {
        text: '和h5的交互',
        url: '/pages/webview/index?webviewUrl=' + encodeURIComponent('https://h5.leoao.com/promotion/experience-card.html#/store-list')
      }
      ]
    }
  },
  methods: {
    navigateItem (item) {
      Megalo.navigateTo({
        url: item.url
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background: rgb(248, 248, 248);
  width: 100%;
  height: 100%;
  min-height: 1334rpx;
}

.index-head {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60rpx 20rpx;

  img {
    width: 108rpx;
    height: 108rpx;
  }

  p {
    margin-top: 20rpx;
    font-size: 28rpx;
    color: rgb(136, 136, 136);
  }
}

.index-item-list {
  .index-item {
    background: white;
    height: 108rpx;
    text-align: center;
    line-height: 108rpx;
    font-size: 32rpx;
    margin: 20rpx 40rpx;
    border-radius: 5rpx;
  }
}
</style>
