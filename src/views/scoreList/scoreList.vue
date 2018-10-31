<template>
 <div class="scoreList">
<div class="header">
    <Header :title="$route.meta.title"></Header>
</div>
<div class="score-content" 
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"

>
    <div class="conten-wrap" v-for="(item,index) in fromData" :key="index">
        <div class="score-wrap">
            <span class="score-title">{{item.typeName}}</span>
            <span class="score">+{{item.singleDesc}}</span>
        </div>
        <div class="data">{{item.timeFormat}}</div>
    </div>   
</div>
    <div class="spinner-wrap"  v-if="isShowing">
        <mt-spinner
            type="fading-circle" 
            color="#26a2ff" 
            class="spinner"    
        >
        </mt-spinner>
    </div>
    <div class="nodata" v-if="loading && !isShowing">
        <p>没有更多数据了</p>
    </div>
 </div>
</template>

<script >
import { Spinner } from 'mint-ui';
import Header from "@/components/header/Header"
 import { Indicator } from 'mint-ui';
export default {
 data() {
    return {
        fromData:[],
        page:1,
        rows:10,
        loading:true,
        isShowing:true
    }
 },
 components: {
     Header,
     Spinner

 },
 created(){
     this.getList()

 },
 methods:{
     loadMore(){
         this.page++
         this.getList()
     },
     getList(){
         let page = this.page
         let rows = this.rows
         this.$axios.get("/integral/integralList.do",{page,rows}).then(res=>{
             if(res.code == 1){
                  console.log(res)
                 this.fromData = [...this.fromData,...res.rows]
                 this.loading =false
                 if(res.rows.length==0){
                     this.loading = true
                     this.isShowing=false  
                 }

             }
            
         })

     }
       
 }
}
</script>

<style scoped lang="scss">
.score-content{
    font-size: 15px;
    margin-top: 52.5px;
    width: 7.5rem;
    .conten-wrap{
        height: 50px;
        padding: 13px;
        border: 1px solid #dddddd;
        .score-wrap{
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            .score{
                color: red;
            }
        }
    }
}
.nodata{
    width: 7.5rem;
    height: 52.5px;
    font-size: 14px;
    text-align: center;
    line-height: 52.5px;
    border-top: 1px solid #666;
    color: #666;
}
.spinner-wrap{
    width: 7.5rem;
    height: 40.5px;
}
  /deep/ .spinner{
     display: block;
       width: 1rem;
       height: 50px;
       margin: 0 auto;
   }
</style>
