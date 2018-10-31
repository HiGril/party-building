<template>
    <div class="app">
        <!-- 首页头部 -->
        <div class="header clearfix ">
            <div class="img-wrap fl">
                <img src="@/style/img/home/logo.png" alt="">
            </div>
            <div class="login fr"><router-link to="/login">登录</router-link></div>
        </div>
            <!-- 首页轮播图 -->
            <div class="swiper-wrap">
                <swiper :options="swiperOption" >
                    <swiper-slide  v-for="(item,index) in getData" :key="index" >
                        <router-link :to="{name:'newsDetail',params:{id:item.url}}">
                            <img :src="item.imgUrl" alt="加载失败">
                            <p>{{item.title}}</p>
                        </router-link> 
                    </swiper-slide>
                </swiper>
                <div class="dot swiper-pagination"></div> 
            </div>
            <!-- 分类 -->
            <div class="category clearfix">
                <div class="row">
                    <router-link to="/newseye" class="Icon-wrap">
                        <img src="@/style/img/home/icon_01.png" alt=""> 
                        <p>信工新闻眼</p>
                    </router-link>  
                    <router-link to="/life" class="Icon-wrap">
                        <img src="@/style/img/home/icon_02.png" alt="">
                        <p>掌上组织生活</p>
                    </router-link>  
                    <router-link to="/interaction" class="Icon-wrap">
                        <img src="@/style/img/home/icon_03.png" alt="">
                        <p>党员云互动</p>
                    </router-link>  
                </div>    
                <div class="row">
                    <router-link to="/oneclick" class="Icon-wrap">
                        <img src="@/style/img/home/icon_04.png" alt=""> 
                        <p>党建一点通</p>
                    </router-link>  
                    <router-link to="/showidentity" class="Icon-wrap">
                        <img src="@/style/img/home/icon_05.png" alt="">
                        <p>党员亮身份</p>
                    </router-link>  
                    <router-link to="/today" class="Icon-wrap">
                        <img src="@/style/img/home/icon_06.png" alt="">
                        <p>党史上的今天</p>
                    </router-link>  
                </div>               
            </div>
            <!-- 图片按钮 -->
            <div class="img-btn-wrap">
                <div class="img-top">
                    <img src="@/style/img/home/banner01.png" alt="">
                </div>
                <div class="img-bg  table">
                    <div class="table-cell"></div>
                    <div class="table-cell">
                        <router-link to="anytimestudy" class="table-row-item"></router-link>
                        <router-link to="System" class="table-row-item"></router-link>
                    </div>
                     <div class="table-cell">
                        <router-link to="anytimephoto" class="table-row-item"></router-link>
                        <router-link to="activity" class="table-row-item"></router-link>
                    </div>
                </div>
            </div>  
            <div>
                <Footer></Footer>
            </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Footer from "@/components/footer/Footer"
export default {
 data() {
 return {
     getData:{},
     swiperOption:{
                //显示分页
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            },
            //切换模式  横屏或者竖屏
            // direction : 'vertical',
            //设置自动播放速度
            autoplay: {
                disableOnInteraction: false,
                delay:3000
            },
            //开启无限循环
            // loop:true,
            //设置点击箭头
            paginationClickable :true,
        
            //设置同屏显示的数量，默认为1，使用auto是随意的意思。
            slidesPerView:1,
            //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
       
            //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
            // freeMode:true
        }
     }

 },
 components: {
        swiper,
        swiperSlide,
        Footer
 },
 created(){
     this.getSwiper()
 },
 methods:{
     getSwiper(){
         this.$axios.get("/carousel/carouselList.do").then(res=>{
             this.getData = res.rows
         })
     }
 }
}
</script>

<style scoped lang="scss">

.app{
    width: 7.5rem;
}
// 头部样式
.header{
    width: 7.5rem;  
    height: 52.5px;
    background: #c50206;
    // padding:5px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border-bottom: 1px solid #ff0;
    display: block;
    margin-bottom: 52.5px;
    .login{
        font-size: 17px;
        a{
            display: block;
            color: #fff;
            text-decoration: none;
            width: 1rem;
            height: 52.5px;
            line-height: 52.5px;
            text-align: center;
        }
    }
    .img-wrap{ 
        height: 35px;
        
        img{
            height: 35px;
            display: block;
         padding-top: 5px;
            padding-left: 5px;
        }
    }
    
}

// 轮播图样式
.swiper-wrap{
    width: 7.5rem;
    height: 225.5px;
    position: relative;
    margin-top: 52.5px;
    // display: block;
    // height: 180.5px;
    overflow: hidden;
     p{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        // width: 7.5rem;
        height: 28px;
        line-height: 28px;
        // padding: 0 5px;
        background: rgba(80, 79, 79, 0.5);
        font-size: 12px;
        color: #fff;
    }
    img{
        width: 7.5rem;
        display: block;
    }
    .dot{
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: 5;
        left: 137.5px;
    }
}
/deep/ .swiper-pagination .swiper-pagination-bullet{
    margin: 0 5px;
    opacity: 0.6;
}
//分类
.category{
    width: 7.5rem;
    height: 100%;
    background: url("../../style/img/home/bt_bg.png");
    background-size:100%;
    font-size: 12px;
    // z-index: 1000;
    padding-top: 10px;
    display: table;
    .row{
        width: 7.5rem;
        display: table-row;
        // height: 90px;
        text-align: center;   
        

    }
    .Icon-wrap{
        display: table-cell;
        color: #666;     
        text-decoration: none; 
        padding-bottom: 15px;
        img{
            width: 1rem;
            margin-bottom: 4px;    
        }
    }
}
//图片按钮
.img-btn-wrap{
     width: 7.5rem;
    margin-bottom: 52.5px;
    //上面
    .img-top{
        width: 7.5rem;
        img{
            width: 7.5rem;
            display: block;
        }
    }
    // 下面
    .img-bg{
        background: url("../../style/img/home/tese.png") no-repeat;
        background-size:100%;
        width: 7.5rem;
        height: 165px;
    }
    .table-row-item{
        display: block;
        height: 50%;
    }
}

</style>
