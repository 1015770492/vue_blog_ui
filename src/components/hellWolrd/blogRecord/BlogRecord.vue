<template>
  <div style="width: 660px;margin: auto">
    <el-timeline style="padding-left: 0px">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card style="background-color: #222222;border-color: #000000;">
          <div style="margin-bottom: 8px;color: #B9B9B9;font-size: 18px;font-family: 宋体">更新 Github 模板</div>
          <el-row>
            <img src="../../../../static/img/img/s1.jpg" class="el-col-6 el-col-offset-0"/>
            <span class="el-col-17 el-col-offset-1" style="line-height: 24px;letter-spacing: 3px;color: #B9B9B9;margin-top: -7px">
                      我希望我的爱情是这样的，相濡以沫，举案齐眉，平淡如水。我在岁月中找到他，
                      依靠他，将一生交付给他。做他的妻子，他孩子的母亲，为他做饭，洗衣服，
                      缝一颗掉了的纽扣。然后，我们一起在时光中变老。</span>
          </el-row>
          <div style="margin-top: 5px;color: #B9B9B9;background-color: rgba(1,1,1,0.3);">王小虎 提交于 2018/4/12 20:46</div>
        </el-card>
      </el-timeline-item>

      <el-timeline-item  style="margin-top: -15px;padding: 0;margin-bottom: 27px;"></el-timeline-item>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :background="true"
          :total="1000">
        </el-pagination>
      </div>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    name: 'BlogRecord',
    data() {
      return {
        currentPage1: 5,
      };
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>
