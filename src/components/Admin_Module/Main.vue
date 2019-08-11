<template>

  <div id="app">
    <mavon-editor  v-model="value"/>
  </div>

</template>

<script>


  export default {
    name: 'Main',
    data(){
      return{
        value:'',
      }
    }
  }
</script>

<style scoped>
  /*.mavonEditor {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
</style>
