<template>
<div class="app">
     <div class="header-news">
        <Header :title="this.$route.meta.title"></Header>
     </div> 
    <div class="newseye-item-wrap" >
        <router-link :to="{name:`${route}Detail`,params:{id:item.newsId}}"  v-for="(item,index) in currentArticles" :key="index"  class="newseye">
            <div class="newseye-item " :key="index">
                <div class="img-wrap"> 
                    <img src='@/style/img/notice/iconfont_gonggaotongzhi.png' alt="" v-if="route=='notice'" :class="{hone:route}" >     
                    <img :src="item.pic" alt="" v-else class="img-pic">
                </div> 
                <div class="content-wrap">
                    <div class="title">{{item.title}}</div>
                    <div class="span-wrap ">
                        <span class="data ">{{item.currentTime}}</span>
                        <!-- <img src="@/style/img/xingong_news/12-eye.png" alt=""> -->
                        <span class="eyes "> <span>{{item.count}}</span></span>
                    </div>
                </div>
            </div>
        </router-link>      
    </div>
</div>

</template>
<script>
 import Header from "@/components/header/Header"
export default {
    props:{
        data:{
            type:Array
        },
        route:String
    },
 data() {
    return {
        currentArticles:[],
        routeData:this.route,
    }
 },
 watch:{
     data(val){
         this.currentArticles = val
     },
    
 },
 components: {
Header
 },
 methods:{
    
 },
 created(){
    //  console.log(this.route)
 }
}
</script>

<style scoped lang="scss">

.app{
    background: #fff;
}

.newseye-item-wrap{
     padding: 0 10px;
     width: 7.1rem;
     font-size: 14px;
     margin-top: 52.5px;
     .newseye{
         height: 1.6rem;
        .newseye-item {
           display: flex;
           height: 1.6rem;
           align-items: flex-end;
           padding: 10px 0;
           .img-wrap{
                padding-right: 10px;
                .img-pic{
                   height: 80px;
                   width: 1.6rem;
                }
                .hone{
                  padding:0 10px 20px; 
                }
           }
        }
        .content-wrap{
            width: 5.3rem;
            height: 1.75rem;
            overflow: hidden;
            text-align: left;
            
            .title{
                height: 1rem;
                overflow: hidden;
                line-height: 1.5;
                margin: 0;
                padding-bottom: 10px;
            }
            .span-wrap{
                height: 0.5rem;
                display: flex;
                justify-content: space-between;
             
                .eyes{
                    // display: block;
                    width: 1rem;
                    height: 0.5rem;
                    display: inline-block;
                    background: url("../../style/img/xingong_news/12-eye.png") no-repeat;
                    padding-left: 23px;
                    background-position: 0 3px;
                    opacity: 0.5;
                   
                    
                   
                }
            }

        }



         
     }
     
 }

</style>
