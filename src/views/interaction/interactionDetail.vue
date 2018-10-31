<template>
 <div class="interactionDetail">
      <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="interactionDetail-wrap">  
         <!-- 楼主信息 -->
         <div class="info">
            <div class="info-wrap">
                <div class="avatar-wrap">
                    <img :src="fromData.avatar" alt="">
                </div>
                <div class="user-wrap">
                    <p class="username">{{fromData.author}}</p>
                    <div class="time">
                        <span class="logo1">{{fromData.time}}</span>
                    </div> 
                </div>  
            </div>
            <div class="content">{{fromData.content}}</div>
         </div>

        <!-- 评论信息区 -->
        <div class="interaction-wrap" v-for="(item,index) in  commitList" :key="index"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading" 
        >  
            <div class="info" :key="index">
                <div class="info-wrap">
                    <div class="avatar-wrap">
                        <img :src="item.header" alt="">
                    </div>
                    <div class="user-wrap">
                        <p class="username">{{item.username}}</p>
                        <div class="time">
                            <span class="logo1">{{item.timeFormat}}</span>
                        </div> 
                    </div>  
                </div>
                <div class="content">{{item.comment}}</div>
            </div>
        </div>

        <!-- 添加评论区 -->
        <div class="comments">
            <form action="" @submit.prevent>
                <input type="text" v-model="commitContent" >
                <mt-button size="small" type="danger"   @click="handleComments">评论</mt-button>
            </form>
        </div>
     </div>
 </div>
</template>
<script >
import Header from "@/components/header/Header"
export default {
 data() {
    return {
        fromData:{
            avatar:"",
            time:"",
            author:"",
            content:"",
            id: ""
        },
        commitContent:"",
        commitList:[],
        page:1,
        rows: 10,
        loading:true,
        page1:1,
    }
 },
 components: {Header},
 created(){
     this.getData()
    //  this.getcommitList()
     this.getonloadcommit()
 },
 methods:{
     //获取楼主信息
     getData(){  
         this.fromData = {...this.$route.query}
     },
     loadMore(){
         this.page++
         this.getonloadcommit()
     },
     //加载评论列表信息
     getonloadcommit(){
         let page = this.page
         let rows = this.rows
         let forum_id = this.fromData.id
         this.$axios.get("/forum/forumCommentList.do",{page,rows,forum_id}).then(res=>{    
             if(res.code == 1){
                 this.loading =false
                 this.commitList = [...this.commitList,...res.rows]
                 if(res.rows.length == 0){
                    this.loading = true
                  }
             }   
         })
     },
     //获取评论列表信息
     getcommitList(){
        //  let page = this.page1
        //  let rows = this.rows
         let forum_id = this.fromData.id
         this.$axios.get("/forum/forumCommentList.do",{forum_id}).then(res=>{
            if(res.code == 1){
                this.commitList = res.rows
            }
         })
     },
     //发表评论
     handleComments(e){
         console.log(e);
         let comment = this.commitContent
         let forum_id = this.fromData.id
         this.$axios.post("/forum/addComment.do",{comment,forum_id}).then(res=>{
             console.log(res)
             if(res.data.code == 1){
                 this.commitContent = ""
             }
              this.getcommitList()
         })

     }
 }

}
</script>

<style scoped lang="scss">

.interactionDetail-wrap{
    width: 7.1rem;
    padding: 10px;
    margin-top: 52.5px;
    font-size: 16px;
    background: #ddd;
    min-height: calc(100vh - 122.5px);
    margin-bottom: 50px;
    // position: relative;
    .comments{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        // border:1px solid #000;
        height: 40px;
        padding: 5px;
        background: #fff;
       
        form input{
            width: 5.85rem;
            padding: 2px 4px;
            height: 26px;
            border-radius: 3px;
            outline: none;
            border: 1px solid red;

        }
    }
}
.interaction-wrap{
    margin-top: 10px;
   
   
}







.info{
        background: #fff;
        height: 2rem;
        padding: 16px;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden; 
        .info-wrap{
            display: flex;
            .avatar-wrap img{
                width: 0.86rem;
                height: 0.86rem;
                border-radius: 50%;
                padding-right: 10px;
            }
            .user-wrap{
                .time{
                    font-size: 12px;
                    .logo1{
                        background: url("../../style/img/interaction/时间.png") no-repeat;
                        padding-left: 20px;
                        margin-right: 5px;
                    }
                }  
            }
        }
        .content{
            font-size: 16px;
            width: 5.8rem;
            // height: 1.69rem;
           
            // line-height: 1.8;           
           
        }

    }




</style>
