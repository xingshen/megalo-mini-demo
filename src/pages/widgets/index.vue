<template>
  <div class="container">
    <div class="content">
      <div class="container-tip">
        container
      </div>
      <div style="background: white">
        默认的div
      </div>
      <div class="div">
        加了样式的div
      </div>
      <p style="background: white">
        默认的p
      </p>
      <p class="p">
        加了样式的p
      </p>
      <span style="background: white">
        默认的span
      </span>
      <span class="span">
        加了样式的span
      </span>
      <button style="background: white">
        默认的button
      </button>
      <button class="button">
        加了样式的button
      </button>

      <img src="https://cdn.leoao.com/pic2-1.png"
           alt=""
           class="img">

      <image src="https://cdn.leoao.com/pic2-1.png"
             mode="aspectFill"
             class="image" />

      <swiper class="groupCourseSwiper"
              :indicator-dots="groupCourse.indicatorDots"
              :autoplay="groupCourse.autoplay"
              :interval="groupCourse.interval"
              :duration="groupCourse.duration">
        <block v-for="(item, index) in groupCourse.imgUrls"
               :key="index">
          <swiper-item>
            <img :src="item">
          </swiper-item>
        </block>
      </swiper>
      <swiper class="groupCourseSwiper"
              :indicator-dots="groupCourse.indicatorDots"
              :autoplay="groupCourse.autoplay"
              :interval="groupCourse.interval"
              :duration="groupCourse.duration"
              vertical=true>
        <block v-for="(item, index) in groupCourse.imgUrls"
               :key="index">
          <swiper-item>
            <img :src="item">
          </swiper-item>
        </block>
      </swiper>

      <form @submit="handleFormSubmit"
            report-submit="true">
        <button form-type="submit" class="form1">提交form表单</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      groupCourse: {
        imgUrls: [
          'https://cdn.leoao.com/pic2-1.png',
          'https://cdn.leoao.com/pic3-1.png',
          'https://cdn.leoao.com/pic4-1.png',
          'https://cdn.leoao.com/pic5-1.png',
          'https://cdn.leoao.com/pic6-1.png',
          'https://cdn.leoao.com/pic7-1.png',
          'https://cdn.leoao.com/pic8-1.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500
      }
    }
  },
  onLoad () {
    Megalo.setNavigationBarTitle({
      title: '常用组件'
    })
  },
  methods: {
    handleFormSubmit (e) {
      this.formId = e.detail.formId
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background: rgb(138, 138, 138);
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
}

.content {
  margin: 20rpx;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
}

.container-tip {
  align-self: flex-start;
}
.div {
  background: red;
  color: white;
  font-size: 30rpx;
  width: 300rpx;
  height: 80rpx;
  margin-top: 20rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 10rpx;
}

.p {
  background: red;
  color: white;
  margin-top: 20rpx;
  font-size: 30rpx;
  border-radius: 10rpx;
  height: 80rpx;
  width: 300rpx;
  text-align: center;
  line-height: 80rpx;
}

.span {
  background: red;
  color: white;
  font-size: 30rpx;
  border-radius: 10rpx;
  display: inline-block;
  height: 80rpx;
  width: 300rpx;
  text-align: center;
  line-height: 80rpx;
  margin-left: 120rpx;
}

.button {
  background: red;
  color: white;
  margin-top: 20rpx;
  font-size: 30rpx;
  width: 300rpx;
}

.img {
  width: 700rpx;
  height: 280rpx;
  // width: 280rpx;
  // height: 280rpx;
  // background-position: center center;
  // background-repeat: no-repeat;
}

.image {
  width: 280rpx;
  height: 280rpx;
}

.groupCourseSwiper {
  height: 280rpx;
  margin-top: 20rpx;

  image {
    width: 750rpx;
    height: 280rpx;
  }
}

.form1 {
  margin-top: 20rpx;
}
</style>
