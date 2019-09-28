<template>
  <!--    侧边导航栏-->
  <el-container>
    <link rel="stylesheet" href="../../../../static/css/iconfont.css">
    <el-menu default-active="1-1"
             :unique-opened="uniqueOpened"
             class="el-menu-vertical-demo message" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             :router="openRouter"
             active-text-color="#ffd04b">

        <!--  仪表盘-->
      <el-submenu index="1" style="margin-top: 1px">
        <template slot="title">
          <i class="el-icon-odometer"></i>
          <span slot="title">仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-s-marketing"></i>数据总览
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--媒体库-->
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont iconmeitiku i" style="margin-left: 4px;margin-right: 10px"></i>
          <span slot="title">媒体库</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="iconfont iconyinyue i" style="margin-left: 4px;margin-right: 6px"></i>
            音乐
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="iconfont iconshipin i" style="margin-left: 4px;margin-right: 6px"></i>
            视频
          </el-menu-item>
          <el-menu-item index="2-3">
            <i class="iconfont icontupian i"  style="margin-left: 4px;margin-right: 6px"></i>
            图片
          </el-menu-item>
          <el-menu-item index="2-3">
            <i class="iconfont iconwenjian i" style="margin-left: 4px;margin-right: 6px"></i>
            文件
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--文章管理-->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/adminMeau/allArticle">
            <i class="el-icon-files"></i>所有文章
          </el-menu-item>
          <el-menu-item index="/adminMeau/addArticle"><i class="el-icon-edit"></i>写文章</el-menu-item>
          <el-menu-item index="3-3"><i class="el-icon-notebook-2"></i>分类目录</el-menu-item>
          <el-menu-item index="3-4"><i class="iconfont iconbiaoqian" style="margin-left: 4px;margin-right: 12px"></i>标签</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--用户管理-->
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont iconqunzu i"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><i class="iconfont iconzizhanghaoguanli i"></i>账号管理</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-unlock"></i>权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--网站统计-->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">网站统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1"><i class="el-icon-s-custom"></i>用户统计</el-menu-item>
          <el-menu-item index="5-2"><i class="el-icon-star-off"></i>文章欢迎度</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--网站设置-->
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">网站设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
            <i class="iconfont iconzhuti i" ></i>
            <span>
                主题设置
            </span>
          </el-menu-item>
          <el-menu-item index="5-2"><i class="el-icon-chat-dot-square"></i>用户评论设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </el-container>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name: 'Aside',
    data(){
      return{
        openRouter:true,
        isCollapse: true,
        uniqueOpened: true,
      }
    },
    methods:{

      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      changeIsCollapse(){
        this.isCollapse = !this.isCollapse
      }

    },
    mounted () {
      PubSub.subscribe("changeIsCollapse",(msg,data)=>{
        this.changeIsCollapse()
      })
    },


  }
</script>

<style scoped>
  .nav-color{
    color: white;
  }

  .i{
    font-size: 18px;
    margin-left: 2px;
    margin-right: 6px;
    color: #909399;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .my-el-dropdown-menu{
    margin-left: 35px;
  }
</style>
