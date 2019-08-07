<template>
  <div class="hello">
    <el-menu style="height: 61px"
      ref="topCollapse"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item class="el-col-1 el-icon-s-unfold" style="font-size: 25px;width: 61px" v-model="isCollapse" @click="changeIsCollapse"></el-menu-item>

        <el-submenu index="1" class="el-col-1 el-col-push-21">
          <template slot="title">
            <span>
            <el-avatar src="../../../static/img/头像.jpg"></el-avatar>
            </span>花生鼠
          </template>
          <el-menu-item index="1-1">个人信息</el-menu-item>
          <el-menu-item index="1-2">安全中心</el-menu-item>
          <el-menu-item index="1-3">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>

    <el-menu default-active="1-4-1"  style="height: calc(100vh - 61px);margin-top: -1px"
             class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">仪表盘</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>

  </div>
</template>




<script>
  export default {
    name: 'HelloWorld',

    data() {
      return {
        isCollapse: true,
        drawer: false,
        direction: 'ltr',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeIsCollapse(){
        this.isCollapse=!this.isCollapse;
      }

    },
    mounted(){

    },


  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 700px;*/
  }

</style>
