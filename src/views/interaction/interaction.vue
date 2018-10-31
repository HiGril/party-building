<template>
 <div class="interaction">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="interact-wrap"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading" 
          ref="mask"
     >
         <div class="interact" v-for="(item,index) in fromList" :key="index" >
             <div :key="index">
                    <div class="interact-top"> 
                        <div class="info-wrap">
                            <div class="avatar-wrap">
                                <img :src="item.header" alt="">
                            </div>
                            <div class="user-wrap">
                                <p class="username">{{item.username}}</p>
                                <div class="time">
                                    <span class="logo1">{{item.currentTime}} </span>
                                    <span class="logo2">公开</span>
                                </div> 
                            </div>  
                        </div>
                        <div class="interact-icon-wrap">
                            <img src="@/style/img/interaction/党员互动icon.png" alt="">
                        </div>
                    </div>
                    <div class="content">{{item.content}} </div>
                    <router-link :to="{path:'/interactionDetail',
                                        query:{avatar:item.header,
                                                time:item.currentTime,
                                                author:item.username,
                                                content:item.content,
                                                id: item.forumId
                                            }}" class="reply-wrap">
                        <span class="logo3">回复</span>
                    </router-link>
             </div>
         </div>

         <!-- 添加互动按钮 -->
         <div class="addInteract" @click="addInteract" v-if="!showing">
             <img src="@/style/img/interaction/发布btn.png" alt="">
         </div>
         <!-- 添加互动内容 -->
         <div class="add-content" v-if="showing" @click="handleCancel"  >
             <div class="form" ref="contents" id="div" @click.stop>
                    <form  @click.prevent>
                        <textarea class="addcontent" v-model="fromContent.content"  @click.prevent></textarea>
                        <div class="btn">
                            <mt-button size="small"  type="primary" @click="handleSure">确定</mt-button>
                            <mt-button size="small"   @click="handleCancel">取消</mt-button>
                        </div>
                    </form>
             </div>
         </div>
          <!-- 加载数据效果 -->
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
 </div>
</template>
<script >
import Header from "@/components/header/Header"
import { Toast } from 'mint-ui';
import {mapState} from "vuex"
export default {
 data() {
    return {
       fromList:[],
       page: 1,
        rows: 10,
        type: 0,
        cates: 0,
        loading:true,
        isShowing:true,
        fromContent:{
            content:"",
            type: 1
        },
        showing:false,
    }
 },
 components: {Header,Toast},
 created(){
     this.getData()
 },
 computed:{
     ...mapState(["fromData"])
 },
 methods:{
     loadMore(){
         this.page++
         this.getData()
     },
     //获取加载数据
    getData(){
        let page  = this.page
        let rows  = this.rows
        let type  = this.type
        let cates = this.cates
        this.$axios.get("/forum/forumList.do",{page,rows,type,cates}).then(res=>{
            if(res.code == 1){
                this.fromList =[...this.fromList, ...res.rows]
                this.loading = false
                if(res.rows.length == 0){
                    this.loading = true
                    this.isShowing=false  
                }
            }
        })
    },
    // 获取单独第一页数据，添加互动
    getPageData(){
        this.$axios.get("/forum/forumList.do",{}).then(res=>{
              if(res.code == 1){
                  this.fromList = res.rows   
            }
        })
    },
    //确定提交内容
    handleSure(){ 
        if(this.fromData.username){
            this.$axios.post("/forum/saveForum.do",this.fromContent).then(res=>{
            if(res.data.code==1){
                this.showing = false
                    Toast({
                        message: res.data.msg,
                        position: 'top',
                        duration: 2000,    
                    });  
                this.fromContent.content = ""      
            }
            this.getPageData()     
            })

        }else{
             Toast({
                message:"用户未登录",
                position: 'top',
                duration: 2000,    
               });  
        }
    },
    //添加互动按钮,取消滑轮滚动
    addInteract(e){
         if(this.fromData.username){　　
            this.showing = true
           this.$refs.mask.addEventListener("touchmove",function(e){  //移动端  判断是遮罩显示时执行，禁止滚屏
                e.preventDefault();
           })
                 
      }else{
          Toast({
            message:"用户未登录",
            position: 'top',
            duration: 2000,  

          })
      }
    },
 
    //取消互动内容
    handleCancel(){


        this.showing = !this.showing

    },
  
    

 }
}
</script>

<style scoped lang="scss">

.interact-wrap{
    margin-top: 52.5px;
    font-size: 12px;
    width: 7.5rem;
    background: #ccc;
    
    .interact{
        padding: 16px;
        border-bottom: 1px solid #ddd;
        height: 166px;
        position: relative;
          margin-bottom: 10px;
          background: #fff;
          
        .interact-top{
            display: flex;
            justify-content: space-between;
            .info-wrap{
                display: flex;
                .avatar-wrap{
                    img{
                        width: 0.86rem;
                        // height: 43px;
                        height: 0.86rem;
                        border-radius: 50%;
                    }
                }
                .user-wrap{
                    padding-left: 10px;
                    .username{
                        font-size: 18px;
                     
                    }
                    .time{
                        height: 26px;
                        line-height: 26px;
                        .logo1{
                            background: url("../../style/img/interaction/时间.png") no-repeat;
                            padding-left: 20px;
                            margin-right: 5px;
                        }
                        .logo2{
                            background: url("../../style/img/interaction/声音.png") no-repeat;
                            padding-left: 20px;
                        }
                    }
                }

            }
        }
        .reply-wrap{
            height: 20px;
            position: absolute;
            right: 10px;
            bottom: 10px;
            text-align: "rigth";
            .logo3{
                padding-left: 20px;
                display: inline-block;
                width: 0.5rem;
                height: 15px;
                background:url("../../style/img/interaction/时间.png") no-repeat;
            }
        }
        .content{
            font-size: 16px;
            width: 5.8rem;
            height: 1.69rem;
            position: relative;
            line-height: 1.8;           
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden; 
        }
    }

    .addInteract{
        position: fixed;
        bottom: 1rem;
        right: 30px;
        z-index: 998;
    }
    .add-content{
       position: fixed;
       bottom: 0;
       left: 0;
       right: 0;
       top: 0;
       z-index: 998;
    //    height: 200px;
        width: 7.5rem;
        background: rgba(0,0,0,.5);
        // height: 100vh;
        .form{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 141px;
            padding: 10px;
            background: #ddd;
            z-index: 1003;
            .addcontent{
                display: block;
                width: 7.1rem;
                margin: 0 auto;
                height: 2rem;
                border: none;
                outline: none;
            }
            .btn{
                display: flex;
                justify-content: space-between;
                padding-top: 10px;
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
}
</style>
