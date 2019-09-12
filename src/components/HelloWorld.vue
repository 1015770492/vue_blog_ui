<template>

  <el-container >
    <!--    顶栏导航栏-->
    <el-header class="el-row" style="padding: 0 0 0 0;">
      <HelloWorldHeader/>
    </el-header>

    <el-container direction="horizontal" style="padding: 0;border-top: #5f5d58 1px solid">
      <!--   main中垂直布局，并且带滚动条  -->
      <el-container  direction="vertical" style="height: calc(100vh - 61px);">
        <el-main style="padding: 0;" id="mainbody">
          <el-header></el-header>

          <div class="block" style="width: 660px;margin: auto">
            <el-timeline style="padding-left: 0px">
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card style="background-color: #222222;border-color: #000000;">
                  <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
                  <el-row>
                    <img src="../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
                    <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
                  </el-row>
                  <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item  style="margin-top: -15px;padding: 0;margin-bottom: 27px;"></el-timeline-item>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  background="true"
                  :total="1000">
                </el-pagination>
              </div>
            </el-timeline>
          </div>
          <el-footer></el-footer>

        </el-main>
      </el-container>
    </el-container>

  </el-container>

</template>


<script>
  // import "echarts"
  // import 'echarts-gl'
  import HelloWorldHeader from './showBlogUI/HelloWorldHeader'

  export default {
    name: "hello",
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      fireworkstest: function () {
        fireworks();
      }
      ,
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components:{
      HelloWorldHeader,
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*overflow: hidden;隐藏滚动条*/
  #mainbody { width: 100%;height: 100%; clear: both; background-color: #333333 }

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

  #fireworks {
    position: fixed;
    top: 0px;
    z-index: 9999;
  }

  /*!* --------------------博客列表-------------------- *!*/
  /*.blogs { width: 1000px; margin: 0 auto 20px; }*/
  /*.bloglist { width: 666px; float: left; }*/
  /*.bloglist>li { border-right: #111 2px solid; padding: 20px 0; }*/
  /*.arrow_box { background: #222; box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7); width: 630px; color: #b9b9b9; border-radius: 6px; position: relative }*/
  /*.ti { width: 0px; height: 0px; border-style: solid; border-width: 0px 0 20px 22px; border-color: transparent transparent transparent #111; position: absolute; left: 630px; top: 20px; }!* 三角形 *!*/
  /*.ci { width: 10px; height: 10px; border-radius: 50%; position: absolute; left: 658px; top: 16px; background: #000; border: 2px solid #333; } !* 圆形定义边框色与背景一致 *!*/
  /*.ci:hover { border: 2px solid #B9B9B9; }*/

  /*.arrow_box h2.title { padding: 0 0 0 20px; font: 16px/50px "微软雅黑", "Microsoft YaHei", Arial, Helvetica, sans-serif }*/
  /*.arrow_box h2 a:hover { padding-left: 20px }*/
  /*!*.textinfo { overflow: hidden; }*!*/
  /*.arrow_box img { width: 150px; padding: 4px; float: left; -webkit-transition: All 1s ease; -moz-transition: All 1s ease; -ms-transition: All 1s ease; -o-transition: All 1s ease; border-radius: 4px; margin: 0 20px 20px; }*/
  /*.arrow_box img:hover { opacity: 0.6; }*/
  /*.arrow_box p { line-height: 24px; padding: 0 20px 20px }*/
  /*.arrow_box p:hover { text-shadow: 1px 1px 1px #000; }*/
  /*.details { background: rgba(1,1,1,0.3); border-radius: 0 0 6px 6px; padding: 0 10px }*/
  /*.details li { line-height: 26px; display: inline; font-size: 11px; margin-right: 10px; }*/
  /*.details li a { color: rgba(218, 211, 134, 0.93)}*/
  /*.details li a:hover { color: #933 }*/
  /*.icon-time, .likes,*/
  /*.icon-time { background-position: 0 -208px; padding: 0 0 0 18px; }*/
  /*.likes, .comments { float: right; padding: 0 0 0 14px; }*/
  /*.likes { background-position: 0 -240px; }*/
  /*.comments { background-position: 0 -220px; }*/



  /*!* CSS Document *!*/
  /** { margin: 0; padding: 0 }*/
  /*body { font: 12px "宋体", "Arial Narrow", HELVETICA; color: #3F3E3C; line-height: 1.5; background: #333; }*/
  /*img { border: 0; vertical-align: middle }*/
  /*h1, h2, h3, h4, h5, h6 { font-weight: normal; }*/
  /*h1 { font: 24px "微软雅黑", "Microsoft YaHei", Arial, Helvetica, sans-serif }*/
  /*p { word-wrap: break-word }*/
  /*ul, ol { list-style: none; }*/
  /*a { color: #a6a6a6; text-decoration: none; transition: All 1s ease; -webkit-transition: All 1s ease; -moz-transition: All 1s ease; -ms-transition: All 1s ease; -o-transition: All 1s ease; }*/
  /*a:hover { color: #fff; }*/
  /*.blank { height: 5px; overflow: hidden; width: 100%; margin: auto; clear: both }*/
  /*!* ---------------------info------------------------- *!*/
  /*.info { width: 1000px; margin: 40px auto; overflow: hidden; clear: both }*/
  /*!* 图片向上翻转的动画效果 *!*/
  /*.info figure { display: inline-block; width: 630px; height: 250px; position: relative; -webkit-animation: pageTop 6s ease 0.5s backwards; -moz-animation: pageTop 6s ease 0.5s backwards; -ms-animation: pageTop 6s ease 0.5s backwards; -o-animation: pageTop 6s ease 0.5s backwards; animation: pageTop 6s ease 0.5s backwards; float: left; }*/
  /*.info figcaption { padding: 20px; position: absolute; top: 20%; left: 0; background: rgba(153,153,153,.8); color: white; opacity: 0; -webkit-transition: opacity .75s ease-out; -moz-transition: opacity .75s ease-out; -o-transition: opacity .75s ease-out; transition: opacity .75s ease-out; }*/
  /*.info figure:hover figcaption { opacity: 1; } !* 用opacity 设置鼠标放上去显示文字的效果 *!*/
  /*.info figcaption strong { display: block; line-height: 40px }*/





</style>
