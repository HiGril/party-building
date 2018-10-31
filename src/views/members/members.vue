<template>
 <div class="page">
<div class="header">
    <Header :title="$route.meta.title"></Header>
</div>
<div class="list-wrap"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
 >
    <div class="list" v-for="(item,index) in userInfo" :key="index">
        <div class="username-wrap">
            <img :src="item.header" alt="">
            <div class="name">{{item.username}}</div>
        </div>
        <div class="section">{{item.branchName}}</div>
    </div>
</div>

    <!-- 加载样式 -->
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
import Header from "@/components/header/Header"
export default {
 data() {
    return {
        page:1,
        rows:10,
        userInfo:[],
        loading:true,
        isShowing:true
    }
 },
 components: { Header},
 created(){
     this.getList()
 },
 methods:{
     loadMore(){
         this.page++
         this.getList()
     },
     //获取列表信息
     getList(){
         let  select_branch = this.$route.query.id
         let  user_id = localStorage.getItem("token")
         let page = this.page
         let rows = this.rows
         this.$axios.get("/nationComment/userList.do",{select_branch,user_id,page,rows}).then(res=>{
             if(res.code == 1){
                 console.log(res);

                this.loading = false
                this.userInfo = [...this.userInfo,...res.rows]
                if(res.rows.length==0){
                    this.loading = true
                    this.isShowing = false
                }   
             }
         })
     }

 }
}
</script>

<style scoped lang="scss">
.list-wrap{
    font-size: 16px;
    margin-top: 52.5px;
    width: 7.5rem;
    .list{
        display: flex;
        justify-content: space-between;
        width: 7.1rem;
        padding: 10px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid #ddd;
        .username-wrap{
            display: flex;
            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                padding-right: 10px;
            }
            .name{
                font-size: 14px;
            }
        }
        .section{
            font-size: 14px;
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
