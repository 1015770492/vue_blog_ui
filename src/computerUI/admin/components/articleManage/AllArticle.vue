<template>
  <div>
    <!--BlogRecord/-->
    <div class="content">
      <div class="l-pic-index" ref="lpic" style="left: 95px; top: -4px;"></div>
      <div class="r-pic-index" ref="rpic" style="right: -23px; top: -5px;"></div>
      <div class="l-bg-index" ref="lbg" style="width: 433px; left: 73px;"></div>
      <div class="r-bg-index" ref="rbg" style="width: 433px; right: -38px;"></div>
      <div class="main-index"  ref="main"style="display: block;">
        <p class="intro-text">
          传统音乐是在以典河流域为中心的中原音乐和四域音乐以及外国音乐的交流融合之中形成发展起来的。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogRecord from '../../../index/blogRecord/BlogRecord'
  export default {
    name: 'AllArticle',
    components:{
      BlogRecord,
    },
    mounted () {
      this.$refs.lpic.animate({'left':'95px','top':'-4px'},1300);
      this.$refs.rpic.animate({'right':'-23px','top':'-5px'},1450);
      this.$refs.lbg.animate({'width':'433px','left':'73px'},1500);
      this.$refs.rbg.animate({'width':'433px','right':'-38px'},1500,function(){
        this.$refs.main.fadeIn(800);
      });
    }
  }
</script>

<style scoped>
  /*通用样式*/
  img{
    border:0;
  }

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .center{
    width: 1000px;
    margin: 0 auto 0;
  }
  /*content*/
  .content{
    position: relative;
    margin: 40px 0 0 -21px;
    width: 900px;
    height: 460px;
  }
  .l-pic-index{
    /*display:none;*/
    position: absolute;
    left: 400px;
    top: 1px;
    z-index:2;
    width:50px;
    height:460px;
    background: url("images/j1.png") no-repeat right 0;
  }
  .r-pic-index{
    /*display:none;*/
    position: absolute;
    right: 400px;
    top: 0;
    z-index: 2;
    width:50px;
    *width:82px;
    height:460px;
    background: url("images/j4.png") no-repeat left 0;
  }
  .l-bg-index{
    position: absolute;
    top: -3px;
    left: 430px;
    z-index: 1;
    width: 25px;
    height: 459px;
    background: url("images/j2.png") right 0 no-repeat;
  }
  .r-bg-index{
    position: absolute;
    top:-4px;
    right: 430px;
    z-index: 1;
    width: 25px;
    height: 459px;
    background: url("images/j3.png") 0 0 no-repeat;
  }
  .main-index{
    display: none;
    overflow: hidden;
    zoom:1;
    position: absolute;
    z-index: 5;
    width:530px;
    height:280px;
    left:145px;
    top:90px;
    color: #2e2e2e;
  }
  .intro-text{
    margin: 10px 0 0 44px;
    line-height: 1.8;
    text-indent: 30px;
  }
</style>
