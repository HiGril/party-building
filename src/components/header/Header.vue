<template>
    <div class="header clearfix">
        <i class="returnIcon fl" @click="handLick"></i>
        <div class="title">{{this.title}}</div>
    </div>
</template>
<script>

export default {
props:{
    title:{
        type:String
    }
},
 data() {
   return {  
    //   currentTitle:this.title
      }
 },
 methods:{
     handLick(){
         history.go(-1)
     }
 }
}
</script>
<style scoped lang="scss">
.header{
    width: 7.5rem;   
    height: 52.5px;
    background: #c50206;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // margin-bottom: 1.5rem;
    z-index: 998;
   
    // z-index: 998;
    .title{
        font-size: 17px;
        color: #fff;
        text-align: center;
        height: 52.5px;
        line-height: 52.5px;
        overflow: hidden;
    
    }
    .returnIcon{
        display: inline-block;
        width: 0.6rem;
        color: #fff;
        text-decoration: none;
        // padding: 0 5px;
        height: 52.5px;
        line-height: 52.5;
        background:url("../../style/img/xingong_news/return_btn.png") no-repeat;
        background-position: 10px 18px;
    }
  
    
}
</style>
