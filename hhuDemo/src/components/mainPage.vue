<template>
    <div class="container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="洪水" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="干旱" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="台风" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="暴雨" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="卫星云图" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <div id="allmap">s</div>
        <baidu-map class="map" center="北京">

        </baidu-map>
    </div>
</template>

<script>
//import BMap from 'BMap';

export default {
    name: 'App',
    data(){
        return{

        }
    },
    created(){

    },
    mounted(){
       
    },
    methods:{
        // baiduMap(){
        //     var map = new BMap.Map("allmap");    // 创建Map实例
        //     map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //     //添加地图类型控件
        //     map.addControl(new BMap.MapTypeControl({
        //     mapTypes:[
        //         BMAP_NORMAL_MAP,
        //         BMAP_HYBRID_MAP
        //     ]}));	  
        //     map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        //     map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // }
    }
}
</script>

<style scoped lang = "scss">
.container{
    width: 100%;
    height: 100%;
    background:red;
    margin-top: 160px;
}
.map {
  width: 100%;
  height: 300px;
}
</style>
