<template>
  <div class="el-row body"  @mousewheel.prevent>
    <div class="login_form" style="margin-top: 140px">
      <router-view v-show="!loginFormStaut"></router-view>
      <div v-show="loginFormStaut" v-model="loginFormStaut" >
        <el-form class="el-row" :model="loginForm" status-icon :rules="rules" ref="loginForm" >
          <h2>
            <span>登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
          </h2>

          <div class="el-col-18 el-col-offset-3 div_margin">
            <el-form-item  prop="username">
              <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
          </div>
          <div class="el-col-18 el-col-offset-3 div_margin">
            <el-form-item  prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <div class="el-col-18 el-col-offset-3 div_margin">
        <span class="el-col-offset-0">
          <span>
            <el-switch v-model="loginForm.password_status" active-color="#13ce66"></el-switch>
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
        </el-form>

        <el-divider class="font_color">
          <span class="font_color">
            第三方登录
          </span>
        </el-divider>
        <div>
          <el-link type="success">
            <img src="../../../static/img/qq_24px.png" alt="">
          </el-link>
          <el-link type="default">
            <img src="../../../static/img/Wechat_24px.png" width="26px" alt="">
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
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          if (this.loginForm.password !== '') {
            this.$refs.loginForm.validateField('username')
          }
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.loginForm.password !== '') {
            this.$refs.loginForm.validateField('password')
          }
          callback()
        }
      };

      return {
        loginForm:{
          username: '',
          password: '',
          password_status: false,
        },
        loginFormStaut: true,
        rules:{
          username: [
            {required: true,validator: validateUser, trigger: 'blur'}
          ],
          password: [
            {required: true,validator: validatePass, trigger: 'blur'}
          ],

        }
      }
    },
    methods: {
      check_login () {
        if(this.loginForm.username!==''&&this.loginForm.password!==''){
          this.$router.replace('/adminMeau');
          this.$message({
            message: '登录成功',
            type: 'success'
          });
        }
        // if (this.password_status){
        // 做缓存
        // }
        // axios.get().catch(error=>{
        //
        // })
      },


    },

    mounted () {
      if(this.$route.path=='/loginNum'){
        this.$message('用户名密码任意即可登录');
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
  .el-divider__text{
    background-color:transparent;  /*背景透明*/
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
