<template>
 <div class="lift">
    <Header :title="this.$route.meta.title"></Header>
   <div class="lift-wrap">
       <div class="img-wrap">
           <img src="@/style/img/lift/timg.jpg" alt="">
       </div>
       <div class="icon-wrap">
           <router-link to="/study">
                <div class="icon">
                    <img src="@/style/img/lift/icon1.png" alt="">
                    <span>政治学习</span>
                </div> 
           </router-link>

           <router-link to="/auditStatus">
                <div class="icon">
                    <img src="@/style/img/lift/icon2.png" alt="">
                    <span>思想汇报</span>
                </div> 
            </router-link>
           <router-link to="/ideology">  
                <div class="icon">
                    <img src="@/style/img/lift/icon3.png" alt="">
                    <span>心得总结</span>
                </div>   
            </router-link>
            <router-link to="/lifeChoice">
                <div class="icon">
                    <img src="@/style/img/lift/icon4.png" alt="">
                    <span>民主评议</span>
                </div>   
            </router-link>
           <router-link to="/map">
                <div class="icon">
                    <img src="@/style/img/lift/icon5.png" alt="">
                    <span>流动党员找组织</span>
                </div> 
           </router-link>  
       </div>
   </div>
 </div>
</template>
<script >
import Header from "@/components/header/Header"
export default {
 data() {
    return {}
 },
 components: {Header}
}
</script>
<style scoped lang="scss">
.lift{
    width: 7.5rem;
  
    .lift-wrap{
        width: 7.5rem;
        margin-top: 52.5px;
        .img-wrap img{
            width: 7.5rem;
        }
        .icon-wrap{
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            text-align: center;

            .icon{
                // height: 116px;
                padding: 15px 18px;
                width: 1.7rem;
                display: flex;
                flex-direction: column;
                img{
                    height: 85px;
                    padding-bottom: 10px;
                }
            }

        }
    }
    
}
</style>
