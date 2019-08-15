// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import App from './components/HelloWorld'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import ValidateCode from './components/Login_Register_Reset_Module/ValidateCode'
import timeOutLogin from './components/timeOutLogin.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
// import $ from 'jquery'


// 验证码组件
Vue.use(ValidateCode)
Vue.config.productionTip = false
Vue.use(ElementUI)

const routes = [
  {
    path: '/loginNum',
    meta: {
      title: '超时重新登录',
      scrollToTop: true,

    },
    component:timeOutLogin,
  }
]

/* eslint-disable no-new */
new Vue({

  el: '#app',
  data() {
    return {
      timeOut: ''
    }
  },
  components: { App },
  template: '<App/>',
  router:router,
  created() {
    this.isTimeOut();
  },
  methods: {
    //页面15分钟无操作时返回首页
    startTimer() {
      let that = this;
      clearInterval(that.timeOut);
      that.timeOut = setInterval(function () {
        that.$router.push({path: '/loginNum'});
      },1000*60*15)
    },
    isTimeOut() {
      let that = this;
      if(that.$route.path == "/") {
        that.startTimer();
      }
      document.body.onmouseup = that.startTimer;
      document.body.onmousemove = that.startTimer;
      document.body.onkeyup  = that.startTimer;
      document.body.onclick  = that.startTimer;
      document.body.ontouchend  = that.startTimer;
    },
  },
  watch: {
    '$route' (to, from) {
      if (to.path == from.path) {
        this.$router.push({
          path: '/loginNum'
        })
      }
    }
  },
})
