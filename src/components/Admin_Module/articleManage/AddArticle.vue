<template>
  <div>
    <el-header>
      <el-input v-model="title"
                placeholder="输入文章标题" maxlength="100"
                show-word-limit></el-input>
    </el-header>
    <mavon-editor  v-model="value" style="max-height: 520px;padding: 20px;"></mavon-editor>
    <el-footer>

    </el-footer>
  </div>
</template>

<script>
  export default {
    name: 'AddArticle',
    data(){
      return{
        title:'',
        value:'',
      }
    }
  }
</script>

<style scoped>

</style>
