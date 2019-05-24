import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)
const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/index',
      'pages/my/my',
      'pages/lifecycle/index',
      'pages/widgets/index',
      'pages/layout/index',
      'pages/webview/index',
      'pages/data-message/index',
      'pages/data-message/children',
      'pages/dialog/index',
      'pages/permission/index'
    ],
    // tabBar: {
    //   color: '#333',
    //   selectedColor: '#007d37',
    //   list: [
    //     {
    //       pagePath: 'pages/hello',
    //       text: 'home',
    //       iconPath: 'native/tabbar/home.png',
    //       selectedIconPath: 'native/tabbar/home_on.png'
    //     },
    //     {
    //       pagePath: 'pages/my/my',
    //       text: 'my',
    //       iconPath: 'native/tabbar/mine.png',
    //       selectedIconPath: 'native/tabbar/mine_on.png'
    //     }
    //   ]
    // },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo 开发小程序',
      navigationBarTextStyle: 'black'
    },
    permission: {
      'scope.userLocation': {
        'desc': '您的位置信息将用于查看附近体验门店'
      }
    }
  }
}
