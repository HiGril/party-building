<template>
 <div class="uppass">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="content-wrap">  
        <form  method="post" class="form-wrap"  @submit.prevent>
            <div class="content">
                <label for="">旧密码:</label>
                <input type="text"  v-model="fromData.oldPwd">
            </div>
            <div class="content">
                <label for="">新密码:</label>
                <input type="text"  v-model="fromData.newPwd">
            </div>
            <div class="content">
                <label for="">确认密码:</label>
                <input type="text"  v-model="fromData.surePwd">
            </div>  
            <div class="btn-wrap">
              <mt-button size="large" class="btn" type="danger" @click="handSure">确定</mt-button>
           </div>          
        </form>
         
     </div>
 </div>
</template>

<script>
import Header from "@/components/header/Header"
import {mapState} from "vuex"
export default {
 data() {
 return {
     fromData:{
         newPwd:'',
         oldPwd:""
     },
     surePwd:""

 }
 },
 components: {
     Header

 },
 created(){
     this.handSure()
    

 },
 computed:{
    //  ...mapState({"token"       })

 },
 methods:{
     handSure(){
        // console.log(this.fromData.oldPwd)
         this.$axios.get("/user/updatePwd.do",this.fromData).then(res=>{
             console.log(res)
         })

     }

 }
}
</script>

<style scoped lang="scss">
.content-wrap{
    font-size: 17px;
    margin-top: 52.5px;
    width: 7.5rem;
    .form-wrap{
        padding-top: 50px;
        width: 6.02rem;
        margin: 0 auto;
        color: #666;
        .content{
            padding-bottom: 10px;

        }
        label{
            display:block;
            height: 35px;
            line-height:35px;
        }
        input{
            width: 5.76rem;
            height: 40px;
            padding: 0 5px;
            border-radius: 5px;
            border: 1px solid #ddd;
            outline: none;
        }
    
    }


}
</style>
