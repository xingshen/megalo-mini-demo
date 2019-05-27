<template>
  <div>
    <button class="btn"
            @click="toggleToast">显示/隐藏Toast</button>
    <button class="btn"
            @click="toggleLoading">显示/隐藏Loading</button>
    <button class="btn"
            @click="showModal">显示对话框</button>
    <button class="btn"
            @click="showActionSheet">显示actionSheet</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isToastShowing: false,
      isLoadingShowing: false
    }
  },
  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '弹窗'
    })
  },
  methods: {
    toggleToast () {
      if (this.isToastShowing) {
        this.isToastShowing = false
        Megalo.hideToast()
        return
      }
      // Megalo.showToast({
      //   title: 'title',
      //   icon: 'none',
      //   duration: 2000,
      //   success: () => {
      //     console.log('toast 显示成功了')
      //     this.isToastShowing = true
      //   }
      // })
      Megalo.showToast({
        title: 'title',
        icon: 'none',
        duration: 2000,
        success: () => {
          console.log('toast 要消失了')
          this.isToastShowing = true
        }
      })
    },
    toggleLoading () {
      if (this.isLoadingShowing) {
        this.isLoadingShowing = false
        Megalo.hideLoading()
        return
      }
      Megalo.showLoading({
        title: 'title',
        success: res => {
          this.isLoadingShowing = true
        }
      })
    },
    showModal () {
      Megalo.showModal({
        title: 'title',
        content: 'content'
      })
    },
    showActionSheet () {
      Megalo.showActionSheet({
        itemList: ['0', '1', '2']
      }).then(res => {
        console.log('选择了第' + res.tapIndex + '项')
      }).catch(res => {
        console.log(res.errMsg)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  margin: 20rpx;
}
</style>
