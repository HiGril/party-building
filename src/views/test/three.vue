<template>
 <div >
   <p v-for="(item,index) in 50" :key="index">
       内容{{item}}
   </p>
 </div>
</template>

<script >
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
</style>
