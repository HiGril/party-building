<template>
 <div class="page">
     <div class="header-news">
        <Header :title="title"></Header>
     </div>
      <div class="spinner-wrap"  v-if="isShowing">
        <mt-spinner
            type="fading-circle" 
            color="#26a2ff" 
            class="spinner"    
        >
        </mt-spinner>
    </div>
    <NewsDetail :getData="getInfo"></NewsDetail>
 </div>
</template>
<script >
import Header from  "@/components/header/Header"
 import  NewsDetail from "@/components/newsDetail/NewsDetail"
 import { Spinner } from 'mint-ui';
export default {
 data() {
    return {
        getInfo:{},
        title:"",
        isShowing:true
    }
 },
 components: {
    NewsDetail,
    Header,
     Spinner
 },
 created(){
    this.getData()
 },
 computed:{},
 methods:{
     getData(){
         let id = this.$route.params.id
         this.$axios.get(`/news/newsContent.do?newsId=${id}`).then(res=>{
           if(res.code==1){
             this.getInfo = res.data
             this.isShowing = false

           }
            switch(res.data.type) {
              case 0: 
                this.title = '信工新闻眼'
                break;
              case 1: 
                this.title = '特色活动'
                break;
              case 2:
                this.title = "通知早知道"
                break;
              case 3: 
                this.title = '党建一点通'
                break;
              case 4: 
                this.title = '制度建设'
                break;
              case 5: 
                this.title = '党员亮身份'
                break;  
              case 6:
                this.title = '随时随地学'
                break;
              case 7:
                this.title = '随时随地拍'
                break;
              case 8:
                this.title ="政治学习"
                break;
              default:
                break;
           }
          })
     },
 }
}
</script>
<style scoped lang="scss">
.spinner-wrap{
    width: 7.5rem;
    height: 40.5px;
    margin-top: 52.5px;
}
  /deep/ .spinner{
       display: block;
       width: 1rem;
       height: 50px;
       margin: 0 auto;
   }

</style>
