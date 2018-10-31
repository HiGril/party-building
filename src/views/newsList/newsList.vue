<template>
<div>
    <div   
        class="newseye-wrap"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
    >
        <List :data="getNewsEyeData" :route="this.$route.name"></List>
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
<script>
import { Spinner } from 'mint-ui';
 import List from "@/components/list/List"
 import { Indicator } from 'mint-ui';
export default {
 data() {
 return {
    getNewsEyeData:[],
    type:0,
    page: 1,
    rows: 10,
    loading:true,
    isShowing:true
    }
 },
 components: {
  List,
  Spinner
 },
 created(){
    this.getNewsEye()
 },
 methods:{
     loadMore(){
          this.page = this.page+1
          this.getNewsEye()
     },
        getNewsEye(){
            let page= this.page
            // console.log(this.page)
            let rows = this.rows
            let type = this.$route.meta.type
            this.$axios.get("/news/newsList.do",{page,rows,type}).then(res=>{
                if(res.code==1){
                    this.getNewsEyeData = [...this.getNewsEyeData,...res.rows]
                    this.loading = false   //可以无限加载
                    if(res.rows.length == 0){
                        this.loading = true  //停止无线加载
                        this.isShowing=false  
                    }        
                }

            })
        },
    }
}
</script>
<style scoped lang="scss">
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


