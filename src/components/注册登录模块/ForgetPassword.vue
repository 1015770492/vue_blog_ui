<template>
  <div class="el-row">
    <div class="content login_form" style="margin-top: 140px">
      <form class="el-row" action="" method="post">
        <h2>
          <span>忘&nbsp;&nbsp;记&nbsp;&nbsp;密&nbsp;&nbsp;码</span>
        </h2>

        <div class="el-col-18 el-col-offset-3 div_margin">
          <el-input
            placeholder="请输入账号/邮箱/手机号"
            v-model="username">
          </el-input>
        </div>
      </form>
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
