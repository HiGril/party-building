<template>
 <div class="anyTimePhotoList">
     <div class="header-news">
        <Header :title="this.$route.meta.title"></Header>
     </div> 
     <div class="anyTimePhotoList-wrap">
          <router-link  :to="{name:`${route}Detail`,params:{id:item.newsId}}"  class="connect" v-for="(item,index) in getData" :key="index">
                <div class="content-wrap-img" :key="index">
                    <img :src="item.pic" alt="">
                    <span>{{item.title}}</span>
                </div>
            </router-link>
     </div>
 </div>
</template>
<script >
import Header from "@/components/header/Header"
export default {
    props:{
        data:{
            type:Array
        },
        route:{
            type:String
        }
    },
    data() {
        return {
            getData:[]
        }
    },
    watch:{
        data(val){
            this.getData = val
        }

    },
 components:{Header}

}
</script>

<style scoped lang="scss">
.anyTimePhotoList-wrap{
    display: flex;
    flex-wrap: wrap;
    margin-top: 52.5px;
    height: 100%;
    font-size: 14px;
    width: 7.5rem;
    align-items: center;
    justify-content: space-between;
    align-content: center;

    .connect{
        display: block;
        width: 3rem;
        height: 157.6px;
        padding: 16px;
          .content-wrap-img{
             width: 3.1rem;
              height: 157.6px;
              display: flex;
              flex-wrap: wrap;
            img{
                width: 3.1rem;
                height: 116px;
            }
    }

    }
  

}
</style>
