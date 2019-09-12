/*
路由器模块
*/
import Vue from 'vue'  // vue
import VueRouter from 'vue-router'  // 路由器
import LoginNum from '../components/login_Register_Reset_Module/LoginNum'  // 登录账号
import RegisterNum from '../components/login_Register_Reset_Module/RegisterNum' //注册账号
import ForgetPassword from '../components/login_Register_Reset_Module/forgetPassword/ForgetPassword'  //忘记密码
import ResetPassword from '../components/login_Register_Reset_Module/ResetPassword'  //重置密码
import HelloWorld from '../components/HelloWorld'   //首页显示
import AdminMeau from '../components/admin_Module/AdminMeau' // 后台管理组件
import AddArticle from '../components/admin_Module/articleManage/AddArticle' // 写博客
import LoginNum_form from '../components/login_Register_Reset_Module/loginNum/LoginNum_form'

Vue.use(VueRouter)  // 注册组件使用路由器


export default new VueRouter({
  routes:[
    /**
     *首页重定向路由
     */
    {
      path:'/',
      redirect: '/helloWorld'
    },
    /**
     *注册，登录 模块组件路由
     */
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
    },{
      path:'/loginNumForm',
      component:LoginNum_form
    },
    /**
     *首页组件 路由
     */
    {
      path:'/helloWorld',
      component:HelloWorld
    },
    /**
     * 管理员路由
     */
    {
      path:'/adminMeau',
      component:AdminMeau,
      children:[
        {
          path:'/adminMeau/addArticle',
          component:AddArticle,
        }
        ]
    },
  ]
})
