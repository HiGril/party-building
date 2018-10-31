<template>
 <div class="page">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="content">
         <div class="audit">
             <div class="img-wrap">
                <img src="@/style/img/home/reviewing.png" alt="">
             </div>
             <p>正在审核中</p>
         </div>
         <div class="btn-wrap">
              <mt-button size="large" class="btn" type="danger" @click="handleClick">关闭</mt-button>
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
 components: {Header},
 methods:{
    handleClick(){
        history.go(-1)
    }
}

}

</script>

<style scoped lang="scss">
.content{
    width: 7.5rem;
    font-size: 16px;
    margin-top: 52.5px;
    .audit{
        text-align: center;
        padding-top: 50px;
        margin-bottom: 100px;
        img{
            height: 90px;
        }
        p{
            margin-top: 15px;
        }

    }
    .btn-wrap{
        width: 4.5rem;
        margin: 0 auto;
        

    }
}

</style>
