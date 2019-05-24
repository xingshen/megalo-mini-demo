<template>
  <div>
    <!-- <button class="btn"
            @click="authorizeLocation">获取用户位置授权</button> -->
    <button class="btn"
            @click="checkPermission">查询用户权限</button>
    <p>{{hasPermissions}}</p>
    <button class="btn"
            @click="openSetting">跳转用户设置页面</button>
    <button class="btn"
            @click="getLocation">授权用户位置</button>
    <p>{{locationInfo}}</p>
    <button class="btn"
            @click="chooseAddress">通讯地址</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasPermissions: '',
      locationInfo: ''
    }
  },
  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '权限管理'
    })
  },
  methods: {
    checkPermission () {
      Megalo.getSetting({
        success: res => {
          this.hasPermissions = res.authSetting
        }
      })
    },
    openSetting () {
      Megalo.openSetting({})
    },
    getLocation () {
      Megalo.getLocation({
        success: res => {
          this.locationInfo = res
        }
      })
    },
    authorizeLocation () {
      Megalo.authorize({
        scope: 'scope.userLocation'
      })
    },
    chooseAddress () {
      Megalo.chooseAddress({})
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  margin: 20rpx;
}
</style>
