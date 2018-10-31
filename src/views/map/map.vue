<template>
 <div class="page">
     <Header :title="this.$route.meta.title"></Header>
       <div class="map-wrap" id="container">


       </div>
 </div>
</template>
<script>
import  Header from "@/components/header/Header"
export default {
 data() {
    return {}
 },
 components: {
     Header
 },
 mounted(){
    this.setMap()
 },
 methods:{
     setMap(){
         const BMap = window.BMap
         this.map = new BMap.Map("container");          // 创建地图实例  

         var startPoint = new BMap.Point(116.404, 39.915);  // 创建点开始坐标（经纬度）  
         var endPoint   = new BMap.Point(114.16, 33.24)     //创建结束坐标点（经纬度）
          
         this.map.centerAndZoom(endPoint,5.5);             // 初始化地图，设置中心点坐标和地图级别  
        

        this.map.addControl(new BMap.NavigationControl({
            anchor:window.BMAP_ANCHOR_TOP_LEFT,
       
        }));

        var startMarker = new BMap.Marker(startPoint);        // 创建起始标注    
        var endMarker = new BMap.Marker(endPoint);            // 创建结束标注   
        
        


        this.map.addOverlay(startMarker);                // 将标注添加到地图中 
        this.map.addOverlay(endMarker);                // 将标注添加到地图中 
        


        //设置标注的信息
       let opts = {
           position:startPoint,
           offset:new BMap.Size(-50, -45)    //设置文本偏移量
       }
       let label = new BMap.Label('信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032',opts)
       this.map.addOverlay(label)


        let label2 = new BMap.Label('信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187',{
                offset: new BMap.Size(-50, -50),
                position:endPoint
            });
        this.map.addOverlay(label2)
          let label3 = new BMap.Label('信息工程学院学生流动党支部支部书记：高洋 电话：13526395586',{
                offset: new BMap.Size(-50, -72),
                position:endPoint
            });
        this.map.addOverlay(label3)


        // 添加定位控件    
      var geoCtrl = new BMap.GeolocationControl({    
            showAddressBar       : true, //是否显示    
            enableAutoLocation : false, //首次是否进行自动定位    
            offset             : new BMap.Size(10,25)    
            //, locationIcon     : icon //定位的icon图标    
      });    
      //监听定位成功事件    
      geoCtrl.addEventListener("locationSuccess",function(e){    
        console.log(e);    
      });    
      //监听定位失败事件    
      geoCtrl.addEventListener("locationError",function(e){    
        console.log(e);    
      });    
      // 将定位控件添加到地图    
      this.map.addControl(geoCtrl);

    





     }

 }
}
</script>

<style scoped lang="scss">
.map-wrap{
    margin-top: 52.5px;
    width: 7.5rem;
    height: 614.5px;
}
</style>
