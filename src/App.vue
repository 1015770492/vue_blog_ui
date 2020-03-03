<template>
  <div id="app">
<!--    跳转到IndexHello组件显示首页  -->
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './computerUI/index/Index'
  import AdminMeau from './computerUI/admin/AdminMeau'

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
