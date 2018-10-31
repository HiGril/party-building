<template>
 <div class="login">
     <div class="header-news">
        <Header :title="this.$route.meta.title"></Header>
     </div>
        <div class="content">
            <div class="logo">
                <img src="@/style/img/home/logo.png" alt="">
            </div>
            <div class="form-wrap">
                <form action="" method="post" @submit.prevent>
                    <p><input type="text" placeholder="身份证号" v-model="formData.id_card"></p>
                    <p><input type="text" placeholder="密码" v-model="formData.password"></p>
                    <mt-button size="large" class="btn" type="danger" @click="handLogin">登录</mt-button>
                </form>
            </div>
        </div>

 </div>
</template>

<script>
import Header from "@/components/header/Header"

import { Toast } from 'mint-ui';
export default {
 data() {
    return {
        formData:{
           id_card: "",
           password:"" ,       
        },
    }
 },
 components: {
     Header,
  
 },
 methods:{
     handLogin(){
        this.$axios.post('/user/userLogin.do',this.formData).then(res=>{
            console.log(res.data)
            if(res.data.code == 1){
                    let obj = {
                        username:res.data.data.username,
                        header:res.data.data.header,
                        idCard:res.data.data.idCard
                       
                    }
                    this.$store.commit("CHANGE_FORM",obj)
                    //把token存放在localStrong里面
                    let token = res.data.token
                    localStorage.setItem("token",token)
                 Toast({
                    message: res.data.msg,
                    position: 'top',
                    duration: 2000,    
                });
                this.$router.push("/user")
            }else{
                 Toast({
                    message: res.data.msg,
                    position: 'top',
                    duration: 2000,
                });
            }
               
        })
     }
 }
}
</script>

<style scoped lang="scss">
//提示消息样式

.login{
    background: #c50206;
    height: 12.28rem;
    .content{
        margin-top: 52.5px;
        .logo{
            height: 1.8rem;
            width: 4.07rem;
            margin: 0px auto;
            img{
                height: 0.978rem;
                width: 4rem;
                margin-top: 30px

            }
        }
        .form-wrap{
            width: 7.5rem;
            form{
                    width: 5rem;
                    margin: 0 auto;
                input{
                    background: none;
                    outline: none;
                    border: 1px solid #ff0;
                    width: 5rem;
                    height: 0.6rem;
                    border-radius: 5px;
                    padding: 5px 15px;
                    color: #fff;
                    
                 }
                 input::-webkit-input-placeholder{
                    font-size: 14px;
                    color: #fff;
                  
                 }
                 .btn{
                     margin-top: 20px;
                     width: 5.6rem;
                     height:0.9rem
                    
                 }


            }
          

        }


    }
}

</style>
