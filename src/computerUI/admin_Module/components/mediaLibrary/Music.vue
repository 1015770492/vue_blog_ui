<template>
  <div id="Music">
    <el-input ref="keyword"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      @keyup.enter.native="searchMusic"
      v-model="keyWord.showKeyword">
    </el-input>
    <Aplayer :autoplay="false"
             :controls="true"
             :showLrc="true"
             :list=this.musicList
             :music="music"
    />
    <button @click="this.test">test</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import Aplayer from 'vue-aplayer'
  import API from '../../../../ApiServerRedirect/ApiServer'

  export default {
    name: 'Music',
    data () {
      return {
        keyWord:{
          showKeyword: '',  // 歌曲名称
          realkeyword:''
        },
        music:{},
        musicList: [],// 歌曲列表
      }
    },
    components: {
      Aplayer
    },
    methods: {
      test(){
        console.log(API.apiUrl)
      },
      // 毫秒转分钟
      ms2min (value) {
        var second = parseInt(value) / 1000       // second
        var minute = 0                            // minute
        if (second > 60) {
          minute = parseInt(second / 60)
          second = parseInt(second % 60)
        }
        var result
        // 获得秒的两位数
        if (second >= 10) {
          result = '' + parseInt(second)
        } else {
          result = '' + '0' + parseInt(second)
        }
        // 获取分钟的两位数
        if (minute >= 10) {
          result = '' + parseInt(minute) + ':' + result
        } else {
          result = '' + '0' + parseInt(minute) + ':' + result
        }
        return result
      },
      getArtists(arr){
        let Artists=''
        for (let i=0;i<arr.length;i++){
          if (i%2===1){
            Artists+='/'
          }
          Artists+=arr[i].name
        }
        return Artists
      },

      // 获取歌曲详情，pic的url
      getSongDetail (id) {

        let sendArr=[
          axios.get(API.apiUrl+'/song/url?id='+id),// 获取音乐url链接
          axios.get(API.apiUrl+'/lyric?id='+id),// 获取歌词 lrc
          axios.get(API.apiUrl+'/song/detail?ids='+id),// 获取歌曲详情
        ]
        axios.all(sendArr).then(axios.spread((musicUrl,Lrc,Detail)=>{
          // console.log(musicUrl.data.data[0].url+'\n') //歌曲url
          // console.log(Lrc.data.lrc.lyric+'\n')        //歌词数据
          // console.log(Detail.data.songs[0].name)      //歌曲名称
          // console.log(this.ms2min(Detail.data.songs[0].dt))         //歌曲时间
          // console.log(Detail.data.songs[0].al.picUrl)         //歌曲图片url
          // console.log(this.getArtists(Detail.data.songs[0].ar))         //歌曲的演唱歌手
          let msc={
            id:id,
            src:musicUrl.data.data[0].url,
            title: Detail.data.songs[0].name,
            lrc:Lrc.data.lrc.lyric,
            artist: this.getArtists(Detail.data.songs[0].ar),
            pic:Detail.data.songs[0].al.picUrl
          }
          // console.log(this.musicList)
          if (JSON.stringify(this.music) == '{}'){
            this.music=msc
          }
          this.musicList.push(msc)
        }))

      },
      searchDefault(){
        axios.get(API.apiUrl+'/search/default').then(response=>{
          this.keyWord.showKeyword=response.data.data.showKeyword
          this.keyWord.realkeyword=response.data.data.realkeyword
          // console.log(response.data.data.realkeyword)
        })
      },
      searchMusic(){
        this.musicList=[]
        if (this.keyWord.showKeyword.indexOf(this.keyWord.realkeyword)!==0){
          this.keyWord.realkeyword=this.keyWord.showKeyword
        }
        axios.get(API.apiUrl+'/search?keywords='+this.keyWord.realkeyword).then(response=>{
          let songs=response.data.result.songs
          for (let i=0;i<songs.length;i++){
            this.getSongDetail(songs[i].id)
          }
        })
      },
    },
    mounted () {
      this.searchDefault()
      this.getSongDetail('1369798757')
    }
  }
</script>

<style scoped>

</style>
