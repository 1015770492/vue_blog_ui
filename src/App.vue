<template>
  <div id="app">
    <router-view></router-view>
<!--    <AdminMeau/>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import AdminMeau from './components/admin_Module/AdminMeau'

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
  }

  body{
    margin: 0 auto;
  }
</style>
