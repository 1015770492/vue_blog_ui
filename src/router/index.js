/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginNum from '../components/Login_Register_Reset_Module/LoginNum'
import RegisterNum from '../components/Login_Register_Reset_Module/RegisterNum'
import ForgetPassword from '../components/Login_Register_Reset_Module/ForgetPassword'
import ResetPassword from '../components/Login_Register_Reset_Module/ResetPassword'

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect: '/loginNum'
    },
    {
      path:'/loginNum',
      component:LoginNum,
      children:[
        {
          path:'/loginNum/registerNum',
          component:RegisterNum
        },{
          path:'/loginNum/forgetPassword',
          component:ForgetPassword,
          children:[
            {
              path:'/loginNum/forgetPassword/resetPassword',
              component:ResetPassword
            },
          ]
        }
      ]
    },
  ]
})
