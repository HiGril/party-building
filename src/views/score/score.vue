<template>
 <div class="score-wrap">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="content-wrap">
         <div class="scoreData">
             <span class="score">{{score}}</span>
         </div>
         <router-link to="/scoreList" class="scoreList-wrap">
            <div class="scoreList">
                <div class="left">
                    <img src="@/style/img/home/lxjf.png" alt="">
                    <span>积分明细</span>
                </div>
                <img src="@/style/img/home/right.png" alt="" class="right">    
            </div>
         </router-link>
         <div class="score-rule-wrap">
             <div class="rule-item score-rule">
                 <span>积分规则</span>
                 <img src="@/style/img/home/wenhao.png" alt="">
             </div>
             <div class="rule-item">
                 <span>登录APP</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>完善个人信息</span>
                 <span class="score">2</span>
             </div>             
             <div class="rule-item">
                 <span>查看积分</span>
                 <span class="score">1</span>
             </div>
             <div class="rule-item">
                 <span>按时缴纳党费</span>
                 <span class="score">10</span>
             </div>
             <div class="rule-item">
                 <span>查看通知</span>
                 <span class="score">2</span>
             </div>
             <div class="rule-item">
                 <span>了解学院工作动态</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>上交思想汇报经审核通过</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>主动学习相关文件</span>
                 <span class="score">10</span>
             </div>
             <div class="rule-item">
                 <span>认真撰写心得总结并上交，经审核通过</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>提交个人总结，并参与评议</span>
                 <span class="score">2</span>
             </div>
            
             <div class="rule-item">
                 <span>积极参与互动</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>学习党建知识</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>学习党史</span>
                 <span class="score">10</span>
             </div>
             <div class="rule-item">
                 <span>创先争优事迹</span>
                 <span class="score">10</span>
             </div>
             <div class="rule-item">
                 <span>学党章，学习近平总书记系列讲话</span>
                 <span class="score">10</span>
             </div>
             <div class="rule-item">
                 <span>用镜头记录两学一做过程中令人感动的人和事</span>
                 <span class="score">3</span>
             </div>
             <div class="rule-item">
                 <span>关注并积极参与特色活动</span>
                 <span class="score">5</span>
             </div>
             <div class="rule-item">
                 <span>制度化、常态化建设</span>
                 <span class="score">5</span>
             </div>
         </div>
         <div class="footer"></div>
     </div>
 </div>
</template>

<script >
import Header from "@/components/header/Header"
export default {
 data() {
 return {
     score:""

 }
 },
 components: {Header},
 created(){
     this.getScore()
 },
 methods:{
     getScore(){
         this.$axios.get("/user/userInfo.do").then(res=>{
            if(res.code==1){
                this.score = res.data.totalScore
            }
         })
     }
 }

}
</script>

<style scoped lang="scss">
.score-wrap{
    font-size: 14px;
    .content-wrap{
        width: 7.5rem;
        margin-top: 52.5px;
        background: #fff;
        .scoreData{
            width: 7.5rem;
            height: 144.8px;
            background: url("../..//style/img/home/jifen.png") no-repeat;
            background-size: 100%;
            line-height: 144.8px;
            .score{
                display: block;
                width: 0.64rem;
                height: 20px;
                margin: 0 auto;
                color: #fff;
            }

        }
        .scoreList-wrap{
            display: block;
            width: 7.5rem;
            .scoreList{
                display: flex;
                height: 0.68rem;
                padding: 10px;
                margin-top: 10px;
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                background: #fff;
                line-height: 0.68rem;
                justify-content: space-between;
               .left{ 
                    display: flex;
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
        .score-rule-wrap{
            margin-bottom: 52.5px;
        }
        .score-rule{
            height: 34px;
              background: rgb(238, 238, 238);;
            color: #444  !important ;
           
            img{
                height: 18px;
                padding: 8px 0;
            }
        }
        .rule-item{
            display: flex;
            justify-content: space-between;
            height: 34px;
            line-height: 34px;
            border-bottom: 1px solid #ddd;
            padding: 0 10px;
            color: rgb(153, 153, 153);
            .score{
                color: red;
            }
        }
        .footer{
            width: 7.5rem;
            height: 52.5px;
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 10;
            background: url("../../style/img/home/底部bg.png") no-repeat;
            background-size: 100%;
            // margin-top: 52.5px;
        }
    }

}
</style>
