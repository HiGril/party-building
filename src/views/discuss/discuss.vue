<template>
 <div class="discuss">
    <div class="header">
        <Header :title="getComment.titleDesc"></Header>
    </div>
    <div class="content-wrap">
        <div class="title" v-html="getComment.titleDesc"></div>
        <div class="content" v-html="getComment.content"></div>
    </div>
    <!-- 选择区 -->
   
    <div class="select-wrap">
         <select class="select" v-model="select_branch">
             <option value="0">请选择</option>
             <option 
                     v-for="(item,index) in selectList"
                     :value="item.id" 
                     :key="index" class="select-item">{{item.branch}}</option>
         </select>
         <mt-button  class="btn" type="danger" @click="handLogin">下一步</mt-button>
    </div>
 </div>
</template>

<script >
import Header from "@/components/header/Header"
import { Toast } from 'mint-ui';
export default {
 data() {
    return {
        getComment:{},
        selectList:[

        ],
        select_branch:0

    }
 },
 components: {
     Header

 },
 created(){
     this.getnationComment()
     this.getSelect()
 },
 methods:{
     //获取民主评议规则
     getnationComment(){
         this.$axios.get("/nationComment/getComment.do").then(res=>{
            this.getComment = res
         })
     },
     //获取select的内容
     getSelect(){
         this.$axios.get("/branch/findAll.do").then(res=>{
             if(res.code ==1){
                 this.selectList = res.rows
             }
         })
     },
     //下一步按钮
     handLogin(){
         if(this.select_branch !=0){
             this.$router.push({path:"/Members",query:{id:this.select_branch}})
         }else{
               Toast({
                    message: "请选择一条信息",
                    position: 'top',
                    duration: 2000,    
                });
             
         }


     }
   
 }
}
</script>

<style scoped lang="scss">
.content-wrap{
    font-size: 14px;
    margin-top: 65.5px;
    padding: 10px;
    line-height: 1.5;
    color: #666;
    .title{
        text-align: center;
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 600;
    }

    /deep/ p:not(:nth-of-type(1)){
        // color: #ff0;
        height: 21px;
        margin-bottom: 10px;
        line-height: 21px;

    }
   
}


.select-wrap{
    width: 5.8rem;
    // padding: 0 15px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    .select{
        width: 4rem;
        background: #c50206;
        height: 41px;
        color: #fff;
        border-radius: 4px;
        outline: none;
        border: 1px solid #c50206;
        margin-left: -15px;
        .select-item{
            background: #fff;
            color: #000;
            

        }
    }
}
</style>
