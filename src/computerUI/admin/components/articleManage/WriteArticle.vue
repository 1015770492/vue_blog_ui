<template>
  <div>
    <!--    阿里云的字体样式 -->
    <link rel="stylesheet" href="../../../../../static/css/iconfont.css">

    <el-header>
      <el-input v-model="articleForm.title"
                placeholder="输入文章标题" maxlength="100"
                show-word-limit></el-input>
    </el-header>
    <mavon-editor v-model="articleForm.value" :ishljs="true" codeStyle="atom-one-dark" style="max-height: 72vh;padding: 20px;min-height: 50vh"></mavon-editor>
    <el-footer>
      <el-form ref="form" :model="articleForm">
        <!-- 标签-->
        <span class="el-col-12">
          <el-form-item label="标签 :">
            <el-tag
              :key="tag"
              v-for="tag in articleForm.tags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新标签</el-button>
          </el-form-item>
          <el-form-item label="发布形式 :">
            <el-radio v-model="articleForm.showLimit" label="1">公开</el-radio>
            <el-radio v-model="articleForm.showLimit" label="2">仅自己可见</el-radio>
          </el-form-item>
        </span>
        <!-- 新建文章个人分类-->
        <span class="el-col-12">
          <el-form-item label="文章个人分类 :" class="el-row">
            <el-tag
              :key="category"
              v-for="category in articleForm.categories"
              closable
              :disable-transitions="false"
              @close="handleClose2(category)">
              {{category}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible2"
              v-model="inputValue2"
              ref="saveCategoryInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm2"
              @blur="handleInputConfirm2">
            </el-input>

            <el-button v-else class="button-new-tag" size="small" @click="showInput2">+ 新分类</el-button>
          </el-form-item>

          <el-form-item label="文章分类:">

            <el-checkbox @change="selectedList(listItem2)" v-for="listItem2 in articleForm.categoryList"
                         :key="listItem2">{{listItem2}}</el-checkbox>

          </el-form-item>
        </span>

        <div>
          <span class="el-col-12">
            <el-button @click="submitArticleForm" class="iconfont iconfabu el-button-style" type="danger"
                       plain> 发布文章</el-button>
            <el-button class="iconfont iconcaogao el-button-style" type="danger" plain> 存为草稿</el-button>
            <el-button class="iconfont iconfanhui el-button-style" type="info" plain>返回</el-button>
          </span>
        </div>
        <div style="height: 50px">
          &nbsp;
        </div>


      </el-form>
    </el-footer>
  </div>
</template>

<script>
    export default {
        name: 'AddArticle',
        data() {
            return {
                inputVisible: false,
                inputValue: '',
                inputVisible2: false,
                inputValue2: '',
                articleForm: {
                    title: '',
                    value: '',
                    showLimit: '1',
                    tags: [],
                    categories: [],
                    categoryList: ['程序人生', 'IT', '天马行空'],
                    categorySelectedList: [],

                }
            }
        },
        methods: {
            handleClose(index) {
                this.articleForm.tags.splice(this.articleForm.tags.indexOf(index), 1);
            },
            handleClose2(index) {
                this.articleForm.categories.splice(this.articleForm.categories.indexOf(index), 1);
                this.selectedList(index);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            showInput2() {
                this.inputVisible2 = true;
                this.$nextTick(_ => {
                    this.$refs.saveCategoryInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.articleForm.tags.push(inputValue)
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            handleInputConfirm2() {
                let inputValue2 = this.inputValue2;
                if (inputValue2) {
                    this.articleForm.categories.push(inputValue2)
                    this.selectedList(inputValue2)
                }
                this.inputVisible2 = false;
                this.inputValue2 = '';
            },
            selectedList(listItem2) {
                if (this.articleForm.categorySelectedList.indexOf(listItem2) !== -1) {
                    console.log("删除" + listItem2)
                    // 删除已选择的文章分类
                    this.articleForm.categorySelectedList.splice(listItem2, 1);
                } else {
                    // 增加 选中的分类文章
                    console.log("增加" + listItem2)
                    this.articleForm.categorySelectedList.push(listItem2);
                }
            },
            submitArticleForm() {
                console.log("文章标题：" + this.articleForm.title +
                    "\n===》文章内容:" + this.articleForm.value +
                    ",\n标签：" + this.articleForm.tags
                    + ",\n选择的分类：" + this.articleForm.categorySelectedList)
            }

        }
    }
</script>

<style scoped>
  .iconfont {
    font-size: 16px;
    margin-right: 8px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .el-button-style {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 0px;
  }
</style>
