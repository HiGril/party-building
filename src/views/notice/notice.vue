<template>
 <div class="page">
    <List :data="getInfo" :route="this.$route.name"></List>
    <Footer></Footer>
 </div>
</template>

<script>
import Footer from "@/components/footer/Footer"
// import Header from "@/components/header/Header"
import List from "@/components/list/List"
export default {
 data() {
 return {
   page:1,
   rows:10,
   type:2,
   getInfo:[],

   }
 },
 components: {
     Footer,
    //  Header,
     List
 },
 created(){
   this.getData()

 },
 methods:{

   getData(){
          let page = this.page
          let rows = this.rows
          let type = this.type
         this.$axios.get("/news/newsList.do",{page,rows,type}).then(res=>{
          if(res.code == 1){
            // console.log(this.routedata)
              this.getInfo = res.rows
              // console.log(this.getInfo)
              
          }
         })
   }
 }
}
</script>

<style scoped lang="scss">
</style>
