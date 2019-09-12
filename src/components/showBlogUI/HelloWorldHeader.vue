<template>
<div style="background-color: #222222;height: 100%;">
  <div class=" el-col-18 el-col-offset-0" >
    <el-menu
      :default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#222222"
      text-color="#B9B9B9"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">程序人生</template>
        <el-submenu index="2-1">
          <template slot="title">后端</template>
          <el-menu-item index="2-1-1">java</el-menu-item>
          <el-menu-item index="2-1-2">springboot</el-menu-item>
          <el-menu-item index="2-1-3">mybatis/mybatis-Plus</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">前端</template>
          <el-menu-item index="2-2-1">Vue</el-menu-item>
          <el-menu-item index="2-2-2">Element-ui</el-menu-item>
          <el-menu-item index="2-2-3">bootstrap</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3">
          <template slot="title">Linux</template>
          <el-menu-item index="2-3-1">Linux基础</el-menu-item>
          <el-menu-item index="2-3-2">vim编辑器</el-menu-item>
        </el-submenu>
        <el-submenu index="2-4">
          <template slot="title">大数据</template>
          <el-menu-item index="2-4-1">hadoop</el-menu-item>
        </el-submenu>
        <el-submenu index="2-5">
          <template slot="title">云计算</template>
          <el-menu-item index="2-4-1">shell编程</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">丰富生活</el-menu-item>
      <el-menu-item index="4">人生规划</el-menu-item>
    </el-menu>
  </div>
  <div class=" el-col-6 el-col-offset-0 el-dropdown_style" >
    <!--  用户登录状态 头像、消息通知-->
    <el-dropdown>
            <span class="el-dropdown-link">
              <span>
               <el-badge is-dot class="dot-location"></el-badge>
               <el-avatar src="../../../static/img/头像.jpg" class="el-avatar"></el-avatar>
              </span>
              <span class="usermeau">
                {{user.name|ellipsis}}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
            </span>
      <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="userInfo">个人信息</el-link>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="userMessage">消息</el-link>
          <el-badge class="mark" :value="12"/>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="info" @click.prevent="sercurityCenter">安全中心</el-link>
          <el-badge class="mark" :value="3"/>
        </el-dropdown-item>
        <el-dropdown-item class="el-dropdown-item">
          <el-link :underline="false" type="danger" @click.prevent="logout">退出登录</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>


</div>
</template>

<script>
  export default {
    name: 'HelloWorldHeader',
    data(){
      return{
        user: {
          name: '花生鼠的日常',
          username: ''
        },

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout () {
        this.$router.replace('/helloWorld')
        this.$message({
          showClose: true,
          message: '已退出登录',
          type: 'success'
        })
      },
      userInfo () {
        this.$router.push('/userInfo')
      },
      userMessage () {
        this.$router.push('/userMessage')
      },
      sercurityCenter () {
        this.$router.push('/securityCenter')
      },
      openAside(){
        Pubsub.publish("changeIsCollapse")
      },
    },
    filters: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 3) {
          return value.slice(0, 3) + '...'
        }
        return value
      }
    }
  }
</script>

<style scoped>
  .el-menu.el-menu--horizontal{
    border-bottom: 0px;
  }
  a{
    text-decoration: none;
  }
  .dot-location {
    position: relative;
    left: 45px;
    top: -30px;
  }
  .el-avatar {
     margin-top: 10px
   }
  .el-dropdown_style {
    text-align: right;
  }
</style>
