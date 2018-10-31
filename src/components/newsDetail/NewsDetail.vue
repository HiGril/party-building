<template>
 <div class="page">
    <div class="content-wrap">
        <div class="content-title" v-html="getData.title"></div>
        <div v-html="getData.content" class="content"></div>
    </div>
 </div>
</template>
<script>
import Footer from "@/components/footer/Footer"
export default {
    props:{
        getData:{
            type:Object
        },
    },
 data() {
    return {
        getInfo:this.getData
    }
 },
 components: { Footer },

}
</script>

<style lang="scss">
.page{
    height: 82vh;
     background: #ffffff;
}
.content-wrap{
    font-size: 15px;
    width: 7.5remm;
    padding: 0 10px;
    line-height: 30px;
    margin-top: 52.5px;
    background: #ffffff;
    img{
        width: 7.1rem;
    }
    .content-title{
        font-size: 20px;
        font-weight: 600;
    }
    h4{
     font-weight: 400;
    
    }
}
</style>
