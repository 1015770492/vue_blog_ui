<template>
  <div id="app" class="el-row" >
    <Login class="login_form"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Login from './components/Login'

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
  .login_form{
    background: rgba(255, 255, 255, 0.28);
    border-radius:10px;
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 0px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

</style>
