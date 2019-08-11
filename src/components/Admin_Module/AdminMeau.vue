<template>
  <el-container  direction="vertical" >
    <!--    顶栏导航栏-->
      <el-header class="el-row" style="padding: 0 0 0 0;">
        <Header/>
      </el-header>
      <!-- Aside 和 main 并列布局   -->
      <el-container direction="horizontal" style="padding: 0">
        <el-aside  width="auto">
          <Aside style="margin-top: 1px;height: calc(100vh - 61px);"/>
        </el-aside>
        <!--   main中垂直布局，并且带滚动条  -->
        <el-container  direction="vertical" style="height: calc(100vh - 61px);">

            <el-header style="padding: 0" >头</el-header>
            <el-main style="padding: 0">
                <mavon-editor style="min-height: 450px"></mavon-editor>
            </el-main>
        </el-container>
      </el-container>

  </el-container>
</template>


<script>
  import Header from './Header'
  import Aside from './Aside'
  import Main from './Main'

  export default {
    name: 'AdminMeau',
    data(){
      return{
        clientHeight:'',
      }
    },
    components: {
      Header,
      Aside,
      Main,
    },
    methods:{
      changeFixed(clientHeight){ //动态修改样式
        // console.log(clientHeight);
        // console.log(this.$refs.homePage.$el.style.height);
        this.$refs.asideMain.$el.style.height = clientHeight-60+'px';
      },
    },

    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
