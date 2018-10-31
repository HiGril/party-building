<template>
<div class="footer">
    <div class="img-wrap">
        <router-link to="/index"  :class="{active:$route.name=='index'}"> 
            <span class="table-text1 table-text">首页</span>
        </router-link>
    </div>
    <div class="img-wrap">
        <router-link to="/notice" :class="{active:$route.name=='notice'}">
            <span class="table-text2 table-text">通知早知道</span>
        </router-link>
    </div> 
    <div class="img-wrap">
        <router-link to="/user" :class="{active:$route.name=='user'}">
            <span class="table-text3 table-text">我的党建</span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
 data() {
    return {}
 },
 components: {}
}
</script>
<style scoped lang="scss">
// 底部导航栏
.footer{
    width: 7.5rem;
    height: 52.5px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    .img-wrap{
        height: 40px; 
        width: 33%;
    }
    a{
        display: block;
        font-size: 12px;
        color: #666;
        text-decoration: none;
        text-align: center;
        // align-items: center;
        padding-top: 25px;
        overflow: hidden;
        border-top: 3px solid transparent;
    }
   .table-text1{   
        background: url("../../style/img/home/党_grey.png") no-repeat;
        background-size:(21px,27px);
    }
     .table-text2{
        background: url("../../style/img/home/消息_grey.png") no-repeat; 
        background-size:(21px,27px);
    }
      .table-text3{
        background: url("../../style/img/home/会员_grey.png") no-repeat;
        background-size:(17px,27px);
    }
    .table-text{
        height: 52px;
        background-position: center 5px;
        padding-top: 25px;
    }
    .active{
         color: red;
         border-top: 3px solid red;
        .table-text1{
            height: 52px;
            background: url("../../style/img/home/党_red.png") no-repeat;
            background-size:(21px,27px);
            background-position: center 5px;
            padding-top: 25px;
        }
        .table-text2{
            height: 52px;
            background: url("../../style/img/home/消息_red.png") no-repeat;
            background-size:(21px,27px);
            background-position: center 5px;
        }
        .table-text3{
            height: 52px;
            background: url("../../style/img/home/会员_red.png") no-repeat;
            background-size:(17px,27px);
            background-position: center 5px;
        }
    }
}
</style>
