<template>
  <div id="app" class="el-row" >
    <router-link to="/login" >login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Login from './components/注册登录模块/Login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
  body{
    background-image:url('./components/img/bg_login.jpeg')
  }

</style>
