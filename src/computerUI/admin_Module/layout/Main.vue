<template>
<!--后台显示内容的页面路由
作用：
当点击侧边导航栏引起路由变化时，
这里的路由就会变成对应页面的UI组件
-->
  <div id="Main">
    <router-view></router-view>
  </div>

</template>

<script>


  export default {
    name: 'Main',

  }
</script>

<style scoped>

</style>
