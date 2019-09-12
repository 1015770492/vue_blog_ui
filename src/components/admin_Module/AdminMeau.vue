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
            <el-main style="padding: 0;">
              <el-header style="margin-top: 10px">
                <el-tag
                  v-for="tag in tags"
                  :key="tag.name"
                  closable
                  :type="tag.type"
                  @click="changRouter(tag.url)"
                  @close="handleClose(tag)">
                  {{tag.name}}
                </el-tag>
              </el-header>
              <router-view></router-view>
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
      Main,
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
</style>
