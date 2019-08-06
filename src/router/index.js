/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/注册登录模块/Login'
import RegisterNum from '../components/注册登录模块/RegisterNum'
import ForgetPassword from '../components/注册登录模块/ForgetPassword'
import ResetPassword from '../components/注册登录模块/ResetPassword'

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path:'/login',
      components:Login,
      children:[
        {
          path:'registerNum',
          components:RegisterNum
        },{
          path:'forgetPassword',
          components:ForgetPassword,
          children:[
            {
              path:'resetPassword',
              components:ResetPassword
            },
          ]
        }
      ]
    },
    {
      path:'/',
      redirect:'/login'
    }
  ]
})
