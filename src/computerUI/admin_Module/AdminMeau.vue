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
        <!--    后台管理显示具体页面的主容器    -->
        <el-container  direction="vertical" style="height: calc(100vh - 61px);">
            <el-main style="padding: 0;">
              <div class="el-header" style="margin-top: 10px">
                <div v-if="screenWidth>768">
                  <!--  电脑端 -->
                  <!--  可关闭标签导航 -->
                  <el-tag v-for="tag in tags" :key="tag.name" class="el-tag-style" closable :type="tag.type" @click="changRouter(tag.url)" @close="handleClose(tag)">
                    {{tag.name}}
                  </el-tag>
                  <hr>
                </div>
              </div>
              <router-view class="el-main"></router-view>
            </el-main>
        </el-container>
      </el-container>

  </el-container>
</template>


<script>
  import Header from './layout/Header'
  import Aside from './layout/Aside'

  export default {
    name: 'AdminMeau',
    data(){
      return{
        screenWidth: document.documentElement.clientWidth,//屏幕宽度
        screenHeight: document.documentElement.clientHeight,//屏幕高度
        selectedId: 0,
        clientHeight:'',
        tags: [
          { name: '所有文章',url:'/adminMeau/allArticle', type: '' },
          { name: '写文章',url:'/adminMeau/addArticle',  type: 'success' },
          { name: '账号管理',url:'/adminMeau/accountManage',  type: 'info' },
          { name: '音乐',url:'/adminMeau/music',  type: 'warning' },
          { name: '主题设置',url:'/adminMeau/themeSetting',  type: 'danger' }
        ]
      }
    },
    methods:{
      handleClose(index) {
        this.tags.splice(this.tags.indexOf(index), 1);
      },
      changRouter(url){
        this.$router.push(url);
      }
    },
    components: {
      Header,
      Aside,
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
  .el-tag-style{
    margin-right: 10px;
    margin-bottom: 8px;
  }
</style>
