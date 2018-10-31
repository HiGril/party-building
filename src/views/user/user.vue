<template>
 <div class="user">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
         
     </div>
     <div class="content">
         <div class="avatar-wrap">
             <div class="avatar">
                 <img :src="userdata.header" alt=""  v-if="fromData.username">
                 <img src="@/style/img/home/yuan.png" alt=""  v-else>
             </div>
             <div class="name"  v-if="fromData.username">{{userdata.username}}</div>
             <div class="name" v-else>您没有登录，请登录</div>
         </div>
         <div class="message-wrap">
            <div class="message-item" data-link="/info" @click="handleClick">
                <div class="left">   
                    <img src="@/style/img/home/person.png" alt="">
                    <p>个人信息</p>
                </div>
                 <img src="@/style/img/home/right.png" alt="" class="right">
            </div>
            <div class="message-item" data-link="/score" @click="handleClick">
                <div class="left">
                    <img src="@/style/img/home/lxjf.png" alt="">
                    <p>个人量化积分</p>
                </div>
                 <img src="@/style/img/home/right.png" alt="" class="right ">
            </div>
            <div class="message-item" @click="handleClick" data-link="/uppass">
                <div  class="left">
                    <img src="@/style/img/home/xgmm.png" alt="" class="left">
                    <p>修改密码</p>
                </div>
                 <img src="@/style/img/home/right.png" alt="" class="right ">
             </div>
               <div class="message-item" @click="handleClick" data-link="/pay">
                   <div class="left">
                        <img src="@/style/img/home/xgmm.png" alt="" class="left">
                        <p>党费缴纳</p>
                   </div>
                 <img src="@/style/img/home/right.png" alt="" class="right">
             </div>
            <!-- <router-link class="message-item" :to="fromData.username ? '/index': '/login'">
                   <div class="left">
                        <img src="@/style/img/home/xgmm.png" alt="" class="left">
                        <p>党费缴纳</p>
                   </div>
                 <img src="@/style/img/home/right.png" alt="" class="right">
            </router-link> -->
         </div>
         <div class="btn-wrap" v-if="fromData.username">
              <mt-button size="large" class="btn" type="danger" @click="handLogin">退出登录</mt-button>
         </div> 
     </div>
   <div class="footer"><Footer></Footer></div>
 </div>
</template>
<script >
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import {mapState} from "vuex"

import { Toast } from 'mint-ui';
export default {
 data() {
    return {
        userdata:{
            username:"",
            header:"",
        }    
    }
 },
 components: {
        Footer,
        Header
 },
 created(){
     this.getdata()
 },
 methods:{
     handleClick($event){
         if(this.fromData.idCard){
            //  currentTarget 事件对象本身
             const path = $event.currentTarget.dataset.link  
             this.$router.push(path)
         } else {
             this.$router.push('/login')
         }
     },
     getdata(){
         this.$axios.get("/user/userInfo.do").then(res=>{
             console.log(res)
            this.userdata.username = res.data.username
            this.userdata.header = res.data.header    
         })
     },
     handLogin(){
         let obj={
             username:"",
             header:"",
             idCard:""
         }
         this.$store.commit("CHANGE_FORM",obj)
         localStorage.removeItem("token")
         Toast({
             message:"退出成功",
             position:"top",
             duration:2000
         })
         setTimeout(() => {
            this.$router.push("/index")  
         }, 1000);
     },       
 },
 computed:{
     ...mapState( ["fromData"])
 }
}
</script>

<style scoped lang="scss">
.content{
    margin-top: 52.5px;
    font-size: 16px;
    width: 7.5rem;
    color: #666;
   
    
    .avatar-wrap{
        text-align: center;
        background: #c50206;
        height: 140px;
        .avatar{
            width: 100%;
            height: 100px;
            img{
                width: 1.25rem;
                height: 1.25rem;
                margin-top: 30px;
                border-radius: 50%;
            }
        }
        .name{
            color: #ffffff;
            font-size: 12px;
        }
        
    }

    .message-wrap{
        width: 7.5rem;
        .message-item{
            width: 7.1rem;
            height: 0.7rem;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            display: flex;
            line-height: 0.7rem;
            justify-content: space-between;
            .left{ 
                display: flex;
                // height: 1.08rem;
                //  line-height: 1.08rem;
                img{
                    height: 32px;
                    padding: 0 10px ;
                }

            }
            .right{
                width: 0.16rem;
                height: 12px;
                padding: 10px 10px;
            }
        }
    }


    .btn-wrap{
        width: 6.8rem;
        margin: 50px auto;
    }



}
</style>
