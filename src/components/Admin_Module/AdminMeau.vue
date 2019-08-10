<template>
  <div class="hello">
    <!--    顶栏导航栏-->
    <el-container class="el-row" :gutter="0">
      <Header />
    </el-container>

    <el-container>
      <span class="el-col-offset-0">
        <!-- 侧边导航栏-->
        <Aside/>
      </span>

      <el-container>
        <!-- 主面板-->
<!--        <Main/>-->
      </el-container>

    </el-container>

  </div>
</template>


<script>
  import Header from './Header'
  import Aside from './Aside'
  import Main from './Main'

  export default {
    name: 'AdminMeau',
    components:{
      Header,
      Aside,
      Main,
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
