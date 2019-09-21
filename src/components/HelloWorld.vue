<template>
  <el-container style="height: auto">
    <!--    顶栏导航栏-->
    <el-header class="el-row" style="padding: 0 0 0 0;height: auto">
      <Nav_Header_ComputerUI v-if="screenWidth>768" style="height: 60px"/>
      <Nav_Header_PhoneUI v-else style="min-height: 60px"/>
    </el-header>
<!--    主显示界面  -->
    <el-container direction="horizontal" style="padding: 0;border-top: #5f5d58 1px solid">
      <!--   main中垂直布局，并且带滚动条  -->
      <el-container direction="vertical" style="height: calc(100vh - 61px);">
        <el-main style="padding: 0;" id="mainbody">
          <el-header></el-header>
<!--          <BlogRecord/>-->
          <el-footer></el-footer>

        </el-main>
      </el-container>
    </el-container>

  </el-container>

</template>


<script>
  import BlogRecord from './hellWolrd/blogRecord/BlogRecord'
  import Nav_Header_ComputerUI from './navigation/Nav_Header_ComputerUI'
  import Nav_Header_PhoneUI from './navigation/Nav_Header_PhoneUI'

  export default {
    name: 'hello',
    data() {
      return {
        screenWidth: document.documentElement.clientWidth,//屏幕宽度
        screenHeight: document.documentElement.clientHeight,//屏幕高度
      }
    },
    components: {
      Nav_Header_ComputerUI,
      Nav_Header_PhoneUI,
      BlogRecord
    },
    watch:{
      'screenWidth':function(val){ //监听屏幕宽度变化
        var oIframe = document.getElementById(divId);
        oIframe.style.width = Number(val);

      },
      'screenHeight':function(){ //监听屏幕高度变化
        var oIframe = document.getElementById(divId);
        oIframe.style.height = Number(val);
      }
    },
    mounted() {
      var _this = this;
      window.onresize = function(){ // 定义窗口大小变更通知事件
        _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
        _this.screenHeight = document.documentElement.clientHeight; //窗口高度
      };
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*overflow: hidden;隐藏滚动条*/
  #mainbody {
    width: 100%;
    height: 100%;
    clear: both;
    background-color: #333333
  }

  html, body {
    background: #333;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  h1 {
    color: #EFEFEF;
  }

</style>
