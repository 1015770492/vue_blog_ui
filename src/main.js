// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'//elementui
import 'element-ui/lib/theme-chalk/index.css'  // elementui样式
import router from './router'   //路由index.js
import ValidateCode from './common/checkComponent/ValidateCode'  // 数字验证码
import SlideVerify from 'vue-monoplasty-slide-verify'          // 滑动验证
import timeOutLogin from './common/TimeOutLogin.vue'         //超时重新登录
import mavonEditor from 'mavon-editor'  // markdown编辑器
import 'mavon-editor/dist/css/index.css'// markdown样式
import $ from 'jquery'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(mavonEditor)
import animate from 'animate.css'
Vue.use(animate)
import LyTab from 'ly-tab'
Vue.use(LyTab)//手机端的可滑动标签导航栏

// 验证码组件
Vue.use(ValidateCode)
Vue.use(SlideVerify);
Vue.config.productionTip = false
Vue.use(ElementUI)

const routes = [
  {
    path: '/login',
    meta: {
      title: '超时重新登录',
      scrollToTop: true,
    },
    component: timeOutLogin,
  }
]

/* eslint-disable no-new */
new Vue({

  el: '#app',
  data () {
    return {
      timeOut: ''
    }
  },
  components: {App},
  template: '<App/>',
  router: router,
  created () {
    this.isTimeOut()
  },
  methods: {
    //页面15分钟无操作时返回首页
    startTimer () {
      let that = this
      clearInterval(that.timeOut)
      that.timeOut = setInterval(function () {
        that.$router.push({path: '/login'})
      }, 1000 * 60 * 15)
    },
    isTimeOut () {
      let that = this
      if (that.$route.path == '/') {
        that.startTimer()
      }
      document.body.onmouseup = that.startTimer
      document.body.onmousemove = that.startTimer
      document.body.onkeyup = that.startTimer
      document.body.onclick = that.startTimer
      document.body.ontouchend = that.startTimer
    },
  },
  watch: {
    '$route' (to, from) {
      if (to.path == from.path) {
        this.$router.push({
          path: '/login'
        })
      }
    }
  },
})
