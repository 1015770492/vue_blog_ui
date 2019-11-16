/*
路由器模块
*/
import Vue from 'vue'  // vue
import VueRouter from 'vue-router'  // 路由器
import Login from '../commonUI/login_Register_Reset_Module/login/Login'  // 登录账号
import ForgetPassword from '../commonUI/login_Register_Reset_Module/password/ForgetPassword'  //忘记密码
import ResetPassword from '../commonUI/login_Register_Reset_Module/password/ResetPassword'  //重置密码
import IndexHello from '../commonUI/Index'   //首页显示
import AdminMeau from '../computerUI/admin_Module/AdminMeau' // 后台管理组件
import AllArticle from '../computerUI/admin_Module/components/articleManage/AllArticle'  // 查看所有文章
import AddArticle from '../computerUI/admin_Module/components/articleManage/AddArticle' // 写博客
import Login_form from '../commonUI/login_Register_Reset_Module/login/Login_form'   //登录表单
import ALlDataView from '../computerUI/admin_Module/components/dashboard/ALlDataView'
import Music from '../computerUI/admin_Module/components/mediaLibrary/Music'   // 仪表盘数据总览
import ErrorPage from '../commonUI/404'
Vue.use(VueRouter)  // 注册组件使用路由器

export default new VueRouter({
  // mode:'history',
  routes: [
    /**
     *首页重定向路由
     */
    {
      path: '/',
      redirect: '/helloWorld'
    },
    {
      path:'/404',
      component:ErrorPage
    },
    /**
     *注册，登录 模块组件路由
     */
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
    }, {
      path: '/loginForm',
      component: Login_form
    },
    /**
     *首页组件 路由
     */
    {
      path: '/helloWorld',
      component: IndexHello
    },
    /**
     * 管理员路由
     */
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
