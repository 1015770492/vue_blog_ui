<template>
  <div class="el-row body"  @mousewheel.prevent>
    <div class="login_form" style="margin-top: 140px">
      <router-view></router-view>
      <div v-show="loginFormStaut">
        <form class="el-row" action="" method="post">
          <h2>
            <span>登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
          </h2>

          <div class="el-col-18 el-col-offset-3 div_margin">
            <el-input
              placeholder="请输入账号"
              v-model="username">
            </el-input>
          </div>
          <div class="el-col-18 el-col-offset-3 div_margin">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="password">
            </el-input>
          </div>
          <div class="el-col-18 el-col-offset-3 div_margin">
        <span class="el-col-offset-0">
          <span>
            <el-switch v-model="password_status" active-color="#13ce66"></el-switch>
          </span>
          <span class="font_color">
              记住密码
          </span>
        </span>
            <span class="el-col-push-4">
<!--          <el-link  :underline="false" href="" @click.prevent="forgetPassword">忘记密码?</el-link>-->
            <router-link to="/loginNum/forgetPassword" class="forget_Password_color">忘记密码?</router-link>
              &nbsp;
              <!--              <el-link type="" :underline="false" href="" @click.prevent="registerNum" >立即注册</el-link>-->
            <router-link to="/loginNum/registerNum" class="register_Num_color">立即注册</router-link>
        </span>

          </div>
          <div class="el-col-18 el-col-offset-3 div_margin">
            <el-button class="el-col-24" type="primary" @click="check_login">登录</el-button>
          </div>
        </form>
        <div class="font_color">
          第三方登录
        </div>
        <hr>
        <div>
          <el-link type="success">
            QQ
          </el-link>
          <el-link type="default">
            微信
          </el-link>
        </div>
      </div>
    </div>

    <div class="auth" style="margin-top: 35px">
      <hr>
      <div class="el-col-18 el-col-offset-3">
        Copyright © 版权所有 花生鼠 著作权
      </div>
    </div>

  </div>
</template>


<script>
  import RegisterNum from './RegisterNum'
  import axios from 'axios'

  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        password_status: false,
        loginFormStaut: true,
      }
    },
    methods: {
      check_login () {
        // if (this.password_status){
        //做缓存
        // }
        // axios.get().catch(error=>{
        //
        // })
      },

    },

    mounted () {
      if(this.$route.path=='/loginNum'){
        // alert("ok")
        // 登录页面显示登录表单
        this.loginFormStaut=true
      }else {
        //其它页面隐藏登录表单，显示其它组件路由
        this.loginFormStaut=false
      }
    },
    components: {
      RegisterNum,
      axios
    },
    watch: {
      $route(to, from) {
        console.log(this.$route.path);
        if(this.$route.path=='/loginNum'){
          // alert("ok")
          // 登录页面显示登录表单
          this.loginFormStaut=true
        }else {
          //其它页面隐藏登录表单，显示其它组件路由
          this.loginFormStaut=false
        }
      }
    }

  }


</script>

<style scoped>
  .body{
    height:100% ;
    width:100%;
    position:absolute;
    background-image: url('../../../static/img/bg_login.jpeg');
  }
  span {
    vertical-align: middle;
  }

  .register_Num_color {
    color: rgba(168, 24, 255, 0.97);
  }

  .forget_Password_color {
    color: rgba(95, 95, 95, 0.85);
  }

  .font_color {
    color: rgba(95, 95, 95, 0.85);
  }

  .auth {
    color: rgba(255, 124, 19, 0.81);
    border-radius: 10px;
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 0px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .login_form {
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #f4e8ff;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 10px;
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 0px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .div_margin {
    margin-bottom: 20px;
  }

</style>
