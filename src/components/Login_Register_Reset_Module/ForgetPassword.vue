<template>
  <div class="el-row">
    <div class="content login_form" >
<!--      <form class="" action="" >-->
<!--        -->

<!--        <div class="el-col-18 el-col-offset-3 div_margin">-->
<!--          <el-input-->
<!--            placeholder="请输入账号/邮箱/手机号"-->
<!--            v-model="username">-->
<!--          </el-input>-->
<!--        </div>-->
<!--        <div>-->
<!--          -->
<!--        </div>-->
<!--      </form>-->
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px"
               class="demo-ruleForm el-row" method="post">
        <div class="el-col-18 el-col-offset-3">
          <h2>
            <span>忘&nbsp;&nbsp;记&nbsp;&nbsp;密&nbsp;&nbsp;码</span>
          </h2>
          <el-input v-model="username" placeholder="请输入用户名/电话/邮箱"></el-input>
          <div class="el-row" style="margin-top: 10px;margin-bottom: 20px">
            <el-button type="primary" @click="submitForm('registerForm')">下一步</el-button>
          </div>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForgetPassword',
    data () {
      return {
        username:''
      }
    }
  }
</script>

<style scoped>

</style>
