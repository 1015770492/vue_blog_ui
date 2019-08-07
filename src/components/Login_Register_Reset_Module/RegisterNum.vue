<template>
  <div class="el-row">
    <div class="el-row">
      <h2>
        注册账号
      </h2>
    </div>
    <div class="el-col-20 el-col-offset-0">
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="registerForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registerForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                  ]">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="validateCode" label="验证码">
          <div class="el-col-12">

          <el-input v-model="registerForm.validateCode"></el-input>
          </div>
          <div class="code el-col-10 el-col-push-1" @click="refreshCode">
            <!--  生成的验证码  -->
            <ValidateCode :identifyCode="identifyCode"></ValidateCode>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
          <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  import ValidateCode from './ValidateCode'
  export default {
    name: 'RegisterNum',
    components: {ValidateCode},
    data () {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          /**
           * 进行ajax检查用户名是否已存在
           * if(判断用户名是否已存在){
           * 存在提醒用户
           *     callback(new Error(‘用户名已存在’))
           * }else{
           *     callback()
           * }
           */
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registerForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      // 校验验证码
      var validateCode=(rule, value, callback)=>{
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          callback(new Error('验证码不正确!'))
        } else {
          callback()
        }
      }
      return {
        identifyCodes: '1234567890',//生成的验证码图片
        identifyCode: '',//生成的验证码图片
        validateCode: '',// 输入的验证码
        registerForm: {
          username: '',
          pass: '',
          checkPass: '',
          email: '',
        },
        rules: {
          pass: [
            {required: true,validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: true,validator: validatePass2, trigger: 'blur'}
          ],
          username: [
            {required: true,validator: validateUser, trigger: 'blur'}
          ],
          validateCode: [
            {required: true, validator: validateCode, trigger: 'blur'},
          ]

        }
      }
    },
    mounted () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      //刷新验证码
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      // 生成验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
        console.log(this.identifyCode);//控制台输出 生成的验证码
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },

    }


  }
</script>

<style scoped>
  .code {
    margin: 0 auto;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }
</style>
