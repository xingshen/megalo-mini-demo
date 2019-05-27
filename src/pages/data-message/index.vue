<template>
  <div class="container">
    <p>1、数据绑定到组件？</p>
    <div class="count">
      <div @click="count"
           class="btn-count"> 点我+1</div>
      <span>{{counter}}</span>
    </div>

    <div class="count">
      <div @click="toggleVisiable(!visiable)"
           class="btn-count">显示/隐藏</div>
      <span v-if="visiable">看见我了吗？</span>
    </div>
    <p>2、页面间数据传递？</p>

    <div class="count">

      <div @click="jumpWithData()"
           class="btn-count">跳转并携带参数</div>

      <input type="text"
             v-model="inputData"
             placeholder="请输入">
    </div>
    <div style="margin-top: 40rpx">storage：{{nextData}}</div>
    <div style="margin-top: 40rpx">vuex：{{nextVuexData}}</div>
  </div>
</template>

<script>
import store from './store'
import { mapState } from 'vuex'

export default {
  store,
  data () {
    return {
      counter: 1,
      visiable: true,
      inputData: '',
      nextData: '222'
    }
  },
  computed: mapState(['nextVuexData']),
  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '数据通信'
    })
    Megalo.setStorageSync('nextData', '显示storage里面的数据')
  },
  onShow () {
    this.nextData = Megalo.getStorageSync('nextData')
  },
  methods: {
    count () {
      this.counter++
      // this.$store.commit('saveVuexData', { value: 'aaaaaaaaa' })
    },
    toggleVisiable (visiable) {
      this.visiable = visiable
    },
    jumpWithData () {
      Megalo.navigateTo({ url: `/pages/data-message/children?data=${this.inputData}` })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding-left: 20rpx;
}

p {
  margin-top: 20rpx;
}

.count {
  display: flex;
  flex-direction: row;
  margin-top: 20rpx;
  align-items: center;

  .btn-count {
    padding: 20rpx;
    background: rgb(17, 46, 212);
    color: red;
    border-radius: 20rpx;
    margin-left: 40rpx;
    font-size: 30rpx;
    margin-right: 20rpx;
  }
  span {
  }
}
</style>
