<template>
  <div class="content" style="margin-top: 140px">
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
          <span class="font_color" >
              记住密码
          </span>
        </span>
        <span class="el-col-push-4">
          <a class="font_color" href="" @click.prevent="forgetPassword">忘记密码?</a>
          &nbsp;
          <a href="" @click.prevent="registerNum" style="color: green">立即注册</a>
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
      <span>QQ</span>
      <span>微信</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '',
        password:'',
        password_status:false,
      }
    },
    methods:{
      check_login(){

      },
      registerNum(){

      },forgetPassword(){

      }
    }
  }
</script>

<style scoped>

  span{
    vertical-align:middle;
  }
  .font_color{
    color: rgba(95, 95, 95, 0.85);
  }
  a{
    text-decoration:none
  }
  .login_form {
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #f4e8ff;
  }

  .div_margin {
    margin-bottom: 20px;
  }

</style>
