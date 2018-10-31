<template>
 <div class="personalsummary">
       <div class="header"><Header :title="$route.meta.title"></Header></div>
       <div class="content">

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
 components: {Header

 }
}
</script>

<style scoped lang="scss">
.content{
    font-size: 16px;
}
</style>
