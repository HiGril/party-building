<template>
 <div class="main-content">
     <header class="header"> 聊天框</header>
     <div class="main" ref="main">
         <ul>
             <li v-for="(item,index) in chat" :key="index">
                 {{item}}
             </li>
         </ul>
     </div>
     <div class="footer">
         <input type="text" v-model="text" @keyup.enter="handle">
         <button @click="handle">发送</button>
     </div>
 </div>
</template>

<script >
export default {
 data() {
 return {
     text:"",
     chat:[
         "测试数据1",
         "测试数据2",
         "测试数据3",
         "测试数据4",
         "测试数据5",
         "测试数据6",
         "测试数据7",
         "测试数据8",
         "测试数据9",
         "测试数据77",
         "测试数据88",
         "测试数据99",
     ]

 }
 },
 components: {

 },
 methods:{
     handle(){
         this.chat.push(this.text)
         this.text = ""
         this.$nextTick(()=>{
            let main =  this.$refs.main
             main.scrollTop = main.scrollHeight
         })

     }
 }
}
</script>
<style>
html{
    height: 100%;
    overflow: hidden;
}
body{
    height: 100%;
    overflow: hidden;
    font-size: 17px;
}
#app{
    height: 100%;
    overflow: hidden;
}
</style>
<style lang="scss" scoped>
.main-content{
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    .header{
        height: 45px;
        line-height: 45px;
        text-align: center;
        background: #f00;
        color: #fff;

    }
    .main{
        flex: 1;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; //解决在苹果电脑滑动卡的问题
        background: #ccc;
        li{
            list-style: none;
            line-height: 50px;
            height: 50px;
            padding-left: 20px;
            color: #fff;
        }
    }
    .footer{
        display: flex;
        input{
            -webkit-appearance: none; //去除移动端 input textarea等输入框的默认样式
            outline: none;
            height: 45px;
            line-height: 45px;
            padding: 0 10px;
            border: 1px solid #d7d7d7;
            flex: 1;
            
        }
        button{
            outline: none;
            width: 80px;
            height: 45px;

        }


    }
     

}

</style>

