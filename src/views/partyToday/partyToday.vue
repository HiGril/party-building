<template>
 <div>
     <div class="header">
        <Header :title="this.$route.meta.title"></Header>
    </div>
    <div class="spinner-wrap"  v-if="isShowing">
        <mt-spinner
            type="fading-circle" 
            color="#26a2ff" 
            class="spinner"    
        >
        </mt-spinner>
    </div>   
     <div class="content-wrap">
         <div v-html="PartyTodyData.content" class="content"></div>
     </div>
 </div>
</template>

<script >
// const cheerio = require('cheerio')
import Header from "@/components/header/Header"
import getUrl from "../../utils/todayNews.js"
import cheerio from "cheerio"
 import { Spinner } from 'mint-ui';
export default {
 data() {
    return {
        PartyTodyData:{
            content:""
        },
        isShowing:true
    }
 },
 components: {
     Header,
     Spinner

 },
 created(){
     this.getPartyTodyData()
 },
 methods:{
     getPartyTodyData(){
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        month = month<10?"0"+month: "" + month;
        day = day<10?"0"+day: "" + day;
        let  url = getUrl(month,day)
         this.$axios.get("/proxy/proxy.do",{url}).then(res=>{
            //  console.log(res);
            if(res){
                this.isShowing=false
            }
            const $ = cheerio.load(res)
            this.PartyTodyData.content =  $('div.p1_02').html()
         })
     }
 }
}
</script>

<style scoped lang="scss">
.content-wrap{
    width: 7.5rem;
    margin-top: 52.5px;
    .content{
        padding: 10px;
        font-size: 17px;
        font-weight: 600px;

    }
}

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
