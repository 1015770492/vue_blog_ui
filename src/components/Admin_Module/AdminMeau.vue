<template>
  <div class="hello">
    <!--    顶栏导航栏-->
    <el-container class="el-row" :gutter="0">
      <el-menu style="height: 61px;"
               ref="topCollapse"
               class="el-menu-demo el-col-24"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <div class="el-col-md-20 el-col-md-offset-0 el-col-sm-19 el-col-sm-offset-0  el-col-xs-16 el-col-xs-offset-0">
          <el-row>
            <!-- 打开侧边导航栏图标 -->
            <span>
             <el-menu-item class="el-icon-s-unfold" style="font-size: 23px;width: 63px;height: 61px;"
                           v-model="isCollapse" @click="changeIsCollapse"></el-menu-item>
           </span>
            <!-- 首页图标 -->
            <span style="margin-left: 10px;" >
                <el-link type="info" :underline="false" href="/helloWorld">
                  <span class="header-font-style">
                    <span class="glyphicon glyphicon-home" ></span>
                    <span style="margin-left: 0px">首页</span>
                  </span>
              </el-link>

            </span>
            <!-- 新建下拉菜单-->
            <span style="margin-left: 30px;">
              <el-dropdown placement="bottom-start">
                  <span class="el-dropdown-link header-font-style" >
                    <span class="glyphicon glyphicon-plus-sign" ></span>
                    <span style="margin-left: 3px;">
                      新建
                    </span>
                  </span>
                <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                  <el-dropdown-item class="el-dropdown-item">
<!--                    <router-link>新建文章</router-link>-->
                      <el-link :underline="false" type="info" @click.prevent="userInfo">新建文章</el-link>
                  </el-dropdown-item>

                  <el-dropdown-item class="el-dropdown-item">
<!--                    <router-link>媒体</router-link>-->
                      <el-link :underline="false" type="info" @click.prevent="userMessage">媒体</el-link>
                  </el-dropdown-item>

                  <el-dropdown-item class="el-dropdown-item">
<!--                    <router-link>页面</router-link>-->
                    <el-link :underline="false" type="info" @click.prevent="sercurityCenter">页面</el-link>

                  </el-dropdown-item>

                  <el-dropdown-item class="el-dropdown-item">
<!--                    <router-link>用户</router-link>-->
                      <el-link :underline="false" type="info" @click.prevent="logout">用户</el-link>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
            </span>

          </el-row>

        </div>

        <!--  用户登录状态 头像、消息通知-->
        <div
          class="el-col-md-4 el-col-md-offset-0 el-col-sm-5 el-col-sm-offset-0 el-col-xs-8 el-col-xs-offset-0 el-dropdown_style">
          <el-dropdown>
              <span class="el-dropdown-link">
                <span>
                 <el-badge is-dot class="item1"></el-badge>
                 <el-avatar src="../../../static/img/头像.jpg" class="el-avatar"></el-avatar>
                </span>
                <span class="item2">
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

      </el-menu>
    </el-container>


    <!--    侧边导航栏-->
    <el-container>
      <span class="el-col-offset-0">
      <el-container>
        <el-menu default-active="1-1" style="height: calc(100vh - 60px);margin-top:-1px"
                 :unique-opened="uniqueOpened"
                 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 background-color="#545c64"
                 text-color="#fff"
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

          <el-submenu index="2">
            <template slot="title">
<!--              <span class="glyphicon glyphicon-film" style="width: 18px;height: 18px"></span>-->
              <i class="glyphicon glyphicon-film" style="margin-left: 4px;margin-right: 10px"></i>
              <span slot="title">媒体库</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="glyphicon glyphicon-music" style="margin-left: 4px;margin-right: 6px"></i>
                音乐
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="glyphicon glyphicon-play-circle" style="margin-left: 4px;margin-right: 6px"></i>
                视频
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="glyphicon glyphicon-picture" style="margin-left: 4px;margin-right: 6px"></i>
                图片
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>



        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><el-link type="info" @click.prevent="allArticle(user.username)"><i
              class="el-icon-files"></i>所有文章</el-link></el-menu-item>
            <el-menu-item index="3-2"><i class="el-icon-edit"></i>写文章</el-menu-item>
            <el-menu-item index="3-3"><i class="el-icon-notebook-2"></i>分类目录</el-menu-item>
            <el-menu-item index="3-4"><i class="el-icon-s-claim"></i>标签</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1"><i class="el-icon-user-solid"></i>账号管理</el-menu-item>
            <el-menu-item index="4-2"><i class="el-icon-unlock"></i>权限管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


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



        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">网站设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">
              <span class="i" >
                <img style="color: #909399" src="../../../static/img/主题.png" height="18" width="18"/>
              </span>
              <span>
                主题设置
              </span>
            </el-menu-item>
            <el-menu-item index="5-2"><i class="el-icon-chat-dot-square"></i>用户评论设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


      </el-menu>
      </el-container>
      </span>

      <el-container>
<!--        主面板-->
        <router-view></router-view>
      </el-container>

    </el-container>


  </div>

</template>


<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        user: {
          name: '花生鼠花生鼠',
          username: ''
        },
        uniqueOpened: true,
        isCollapse: true,
        drawer: false,
        direction: 'ltr',
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      changeIsCollapse () {
        this.isCollapse = !this.isCollapse
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
      allArticle (username) {
        this.$router.push('/allArticle/' + username)
      }

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-font-style{
    font-size: 18px;
    color: #909399
  }
  .mark{
    background-color: transparent;
  }

  .i{
    margin-left: 2px;
    margin-right: 6px;
  }
  span {
    border: 0px;
    margin: 0 0 0 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .item1 {
    position: relative;
    left: 45px;
    top: -30px;
  }

  .el-avatar {
    margin-top: 10px
  }

  .item2 {
    position: relative;
    color: white;
    top: -10px;
  }

  .el-dropdown-item {
    margin-top: 5px;
    color: white;
  }

  .el-dropdown_style {
    background-color: #545c64;
    color: white;
    text-align: right;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-dropdown-menu {
    margin-top: 5px;
    border: 0px;
    color: white;
    background-color: #545c64;
  }
  .my-el-dropdown-menu{
    margin-left: 30px;
  }


</style>
