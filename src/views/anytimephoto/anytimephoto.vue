<template>
 <div>
      <div class="spinner-wrap"  v-if="isShowing">
            <mt-spinner
                type="fading-circle" 
                color="#26a2ff" 
                class="spinner"    
            >
            </mt-spinner>
    </div>
    <PhotoList :data="PotoListData" :route="this.$route.name"></PhotoList>
 </div>
</template>
<script >

import PhotoList from "@/components/photoList/PhotoList"
 import { Spinner } from 'mint-ui';
export default {
 data() {
    return {
      PotoListData:[],
      page:1,
      rows:10,
      isShowing:true
    }
 },
  components:{PhotoList,Spinner},
  created(){
    this.getPotoList()
  },
  methods:{
    getPotoList(){
      let page = this.page
      let rows = this.rows
      let type = this.$route.meta.type
      this.$axios.get("/news/newsList.do",{page,rows,type}).then(res=>{
        if(res.code==1){
          this.PotoListData = res.rows
          this.isShowing = false 
        }       
      })
    }
  }
}
</script>

<style scoped lang="scss">

.spinner-wrap{
    width: 7.5rem;
    height: 40.5px;
    margin-top: 52.5px;
}
  /deep/ .spinner{
       display: block;
       width: 1rem;
       height: 50px;
       margin: 0 auto;
   }

</style>
