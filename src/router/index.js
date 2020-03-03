/*
路由器模块
*/
import Vue from 'vue'  // vue
import VueRouter from 'vue-router'  // 路由器
import Login from '../computerUI/login_Register_Reset/login/Login'  // 登录账号
import ForgetPassword from '../computerUI/login_Register_Reset/password/ForgetPassword'  //忘记密码
import ResetPassword from '../computerUI/login_Register_Reset/password/ResetPassword'  //重置密码
import HelloWorld from '../computerUI/index/Index'   //首页显示
import AdminMeau from '../computerUI/admin/AdminMeau' // 后台管理组件
import AllArticle from '../computerUI/admin/components/articleManage/AllArticle'  // 查看所有文章
import AddArticle from '../computerUI/admin/components/articleManage/WriteArticle' // 写博客
import Login_form from '../computerUI/login_Register_Reset/login/Login_form'   //登录表单
import ALlDataView from '../computerUI/admin/components/dashboard/ALlDataView'
import Music from '../computerUI/admin/components/mediaLibrary/Music'   // 仪表盘数据总览
import ErrorPage from '../common/404'
Vue.use(VueRouter)  // 注册组件使用路由器

export default new VueRouter({
  // mode:'history',
  routes: [
    /**首页**/
    {
      path: '/helloWorld',
      component: HelloWorld
    },
    /**根路径 重定向到helloworld页面**/
    {
      path: '/',
      redirect: '/helloWorld'
    },
    /**404页面**/
    {
      path:'/404',
      component:ErrorPage
    },
    /**登录 和 注册  **/
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: '/login/forgetPassword',
          component: ForgetPassword,
          children: [
            {
              path: '/login/forgetPassword/resetPassword',
              component: ResetPassword
            },
          ]
        }
      ]
    },
    {
      path: '/loginForm',
      component: Login_form
    },

    /** 博客后台 **/
    {
      path: '/adminMeau',
      component: AdminMeau,
      children: [
        { // 重定向到仪表盘
          path: '/adminMeau',
          redirect: '/adminMeau/allDataView',
        },
        {  // 仪表盘
          path: '/adminMeau/allDataView',
          component: ALlDataView,
        },
        {// 查看所有文章
          path: '/adminMeau/allArticle',
          component: AllArticle,
        },
        {// 添加文章
          path: '/adminMeau/addArticle',
          component: AddArticle,
        },
        {// 播放音乐
          path: '/adminMeau/playMusic',
          component: Music,
        },
      ]
    },
  ]
})
