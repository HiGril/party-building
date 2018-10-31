<template>
 <div class="lifeChoice">
     <div class="header">
         <Header :title="$route.meta.title"></Header>
     </div>
     <div class="btn-content">
        <div class="btn-wrap">
              <mt-button size="large" class="btn" type="danger" @click="handLogin" data-link="/personalsummary">个人总结</mt-button>
         </div> 
        <div class="btn-wrap"  >
              <mt-button size="large" class="btn" type="danger" @click="handLogin" data-link="/discuss">民主评议</mt-button>
         </div> 
     </div>
 </div>
</template>

<script>
import Header from "@/components/header/Header"
export default {
 data() {
 return {

 }
 },
 components: {Header},
 methods:{
     handLogin($event){
        //  console.log($event);
         let path = $event.srcElement.dataset.link
        //  console.log(path)
          this.$router.push(path)
     },

 }
}
</script>

<style scoped lang="scss">
.btn-content{
    margin-top: 252.5px;
    height: 154px;
    .btn-wrap{
        width: 3rem;
        margin: 10px auto;
    }


}
</style>
