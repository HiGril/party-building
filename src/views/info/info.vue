<template>
 <div class="info">
     <div class="header">
         <Header :title="isShowing ?'个人信息':'修改个人信息' "></Header>
         <span class="edit" @click="()=>isShowing ? handEdit() : handSave() ">{{isShowing ? " 编辑" : "保存" }}</span>        
     </div>
     <div class="message-wrap">
         <div class="message-item">
            <span>头像</span>
            <img :src="userInfo.header"   class="message-item-img" >
            <label for="img" v-if="!isShowing" class="label">
                <img src="" alt="" id="showing" >
               <input type="file" @change="handleImg" class="file-img" id="img">
            </label>    
         </div>
        <div class="message-item" >
            <span>姓名</span>
            <span v-if="isShowing">{{userInfo.username}}</span>
            <input type="text" v-model="userInfo.username" v-else>
         </div>
        <div class="message-item">
            <span>身份证</span>
            <span>{{userInfo.idCard}}</span>
         </div>
         <div class="message-item">
            <span>家庭住址</span>
            <span v-if="isShowing">{{userInfo.hometown}}</span>
            <input type="text" v-model="userInfo.hometown" v-else>
         </div>
        <div class="message-item">
            <span>工作地址</span>
             <span v-if="isShowing">{{userInfo.address}}</span>
             <input type="text" v-model="userInfo.address" v-else>
         </div>
        <div class="message-item">
            <span>民族</span>
            <span v-if="isShowing">{{userInfo.nation}}</span>
            <input type="text" v-model="userInfo.nation" v-else>
         </div>
        <div class="message-item">
            <span>微信号</span>
            <span v-if="isShowing">{{userInfo.wxNum}}</span>
            <input type="text" v-model="userInfo.wxNum" v-else>
         </div>
        <div class="message-item">
            <span>QQ号</span>
            <span v-if="isShowing">{{userInfo.qqNum}}</span>
            <input type="text" v-model="userInfo.qqNum" v-else>
         </div>
        <div class="message-item">
            <span>性别</span>
            <span v-if="isShowing">{{userInfo.sex==1?"男":"女"}}</span>
            <span v-else class="sex">
                <input type="radio" value="1"  v-model="userInfo.sex" class="boy" >男
                <input type="radio" value="0"  v-model="userInfo.sex" class="boy">女
            </span> 
         </div>
        <div class="message-item">
            <span>最高学历</span>
            <span v-if="isShowing">{{userInfo.education}}</span>
            <input type="text" v-model="userInfo.education" v-else>
         </div>
        <div class="message-item">
            <span>职称</span>
            <span v-if="isShowing">{{userInfo.jobRank}}</span>
            <input type="text" v-model="userInfo.jobRank" v-else>
         </div>
        <div class="message-item">
            <span>薪资水平</span>
            <span v-if="isShowing">{{userInfo.salary}}</span>
            <input type="text" v-model="userInfo.salary" v-else>
         </div>         
        <div class="message-item">
            <span>入党时间</span>
            <span v-if="isShowing">{{userInfo.joinPartyTime}}</span>
            <input type="date" v-model="userInfo.joinPartyTime" v-else>
         </div>
        <div class="message-item">
            <span>党费最后缴纳时间</span>
            <span v-if="isShowing">{{userInfo.lastPayTime}}</span>
            <input type="date" v-model="userInfo.lastPayTime" v-else>
         </div>  
        <div class="message-item">
            <span>当前身份</span>
            <span v-if="isShowing">{{userInfo.partyStatus==1?"积极分子":userInfo.partyStatus==0?"预备党员":"党员"}}</span>
           <span v-else >
               <select v-model="userInfo.partyStatus" class="select">
                    <option value="0" >预备党员</option>
                    <option value="1" >积极分子</option>
                    <option value="2" >党员</option>
               </select>
           </span>
         </div>                
     </div>
 </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import Header from "@/components/header/Header"
export default {
 data() {
 return {
     userInfo:{},
     isShowing:true
 }
 },
 components: {Header},
 created(){
     this.getUserInfo() 
 },
 methods:{
     handleImg($event){
         var file = $event.target.files[0]
         let  render = new FileReader();
         var preview = document.querySelector('#showing') //定位到预览位子
         render.onloadend=()=>{
             preview.src = render.result 
             let imgsrc = render.result.split(",")[1]
             const form = {
                myFile: imgsrc
             }
             this.$axios.post("/image/uploadBase64.do",form).then(res=>{
                this.userInfo.header = res.data.url
             })
         }
         render.readAsDataURL(file)
     },
    getUserInfo(){     
        this.$axios.get("/user/userInfo.do").then(res=>{
            console.log(res)
            if(res.code == 1){
                this.userInfo = res.data      
            }
        })  
    },
        handEdit(){this.isShowing = false},
        handSave(){
             delete this.userInfo.idCard
             this.$axios.post("/user/modifyInfo.do",this.userInfo).then(res=>{
                this.isShowing = true
            })
            this.getUserInfo()
        }
 }
}
</script>

<style scoped lang="scss">
// .file-img{
//     display: none;
// }
.info{
    font-size: 14px;
    color: #666;
    .header{
        .edit{
            // display: block
            z-index: 999;
            position: fixed;
            right: 15px;
            top: 16px;
            color: #fff;
            font-size: 16px;

        }
    }
    .message-wrap{
        width: 7.5rem;
       
        margin-top: 52.5px;
        .message-item{
            position: relative;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            height: 0.6rem;
            line-height: 0.6rem;
            border-bottom: 1px solid #ccc;
            .message-item-img{
                position:absolute;
                right: 21px;
                top: 11px;
            }
            .label{
                display: inline-block;
                width: 0.7rem;
                height: 0.7rem;
                border: 1px solid #ccc;
                z-index: 998;
                border-radius: 50%;

                input{
                    display: none;
                }
                img{
                     width: 0.7rem;
                height: 0.7rem;
                // border: 1px solid red;
                border-radius: 50%

                }

            }
            img{
                width: 0.7rem;
                height: 0.7rem;
                // border: 1px solid red;
                border-radius: 50%;
            }
        }
        
    }
    input{
        width: 2.7rem;
        border: none;
        text-align: right;
        outline: none;
        background: #fff;
    }
    .sex{
        .boy{
            width: 0.5rem;
        }
    }
    .select{
        width: 2rem;
        height: 30px;
        border: 1px solid #ddd;
        outline: none;
        background: #fff;
        // text-align: right;
        padding-left: 17px;
    }
}
</style>
