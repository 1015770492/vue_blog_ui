<template>
  <div id="app">
<!--    <router-view></router-view>-->
    <AdminMeau/>
<!--    <Login/>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import AdminMeau from './components/Admin_Module/AdminMeau'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      AdminMeau
    }
  }

</script>

<style>
  #app{
    height:100% ; width:100%;
    position:absolute;
  }

  body{
    margin: 0 auto;
  }
</style>
