<template>
 <div class="pay">
     <div class="header"><Header :title="$route.meta.title"></Header></div>
     <div class="pay-wrap">
         <div class="pay-title ">请选择支付方式</div>
         <div class="pay-way" @click=" (isWechat=true) && (isShow=true) "> 
             <div class="left">
                 <img src="@/style/img/home/微信.png" alt="">
                 <span>微信</span>
             </div>
              <img src="@/style/img/home/right.png" alt="" class="right">
         </div>
         <div class="pay-way" @click="(isAlipay=true) && (isShow=true) ">
             <div class="left">
                 <img src="@/style/img/home/支付宝.png" alt="">
                 <span>支付宝</span>
             </div>
              <img src="@/style/img/home/right.png" alt="" class="right">
         </div>
     </div>
     <div class="EWM" v-show="isShow"  @click="handle" >
          <img src="@/style/img/home/wechat.png" alt="" v-show="isWechat">
         <img src="@/style/img/home/alipay.png" alt="" v-show="isAlipay">
     </div>
 </div>
</template>

<script >
import Header from "@/components/header/Header"
export default {
 data() {
    return {
        isWechat:false,
        isAlipay:false,
        isShow:false
    }
 },
 components: {
     Header
 },
 methods:{
     handle(){
         this.isShow = false
         this.isWechat=false
         this.isAlipay=false
     }
 }
}
</script>

<style scoped lang="scss">
.pay-wrap{
    margin-top: 52.5px;
    font-size: 14px;
    width: 7.5rem;
    .pay-title{
        height: 0.6rem;
        line-height: 0.6rem;
        border-bottom: 1px solid #ddd;
        padding: 10px;
    }
    .pay-way{
        width: 7.1rem;
        height:0.8rem;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        display: flex;
        line-height: 0.8rem;
        justify-content: space-between;
            .left{ 
                display: flex;
                height: 0.8rem;
                line-height: 0.8rem;
                img{
                    height: 40px;
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
.EWM{
    background:rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    right: 0;
    top: 52.5px;
    bottom: 0;
    img{
        position: absolute;
        left: 50px;
        top: 120px;
        width: 5.4rem;
        height: 270px;

    }
}
</style>
