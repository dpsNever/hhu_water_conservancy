<template>
    <div class="container">
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
            <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
        </baidu-map>

        <el-tabs v-model="activeName" @tab-click="handleClick" value="first">
            <el-tab-pane label="洪水" name="first">
                <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
                    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                    </bm-marker>
                </baidu-map>
            </el-tab-pane>
            <el-tab-pane label="干旱" name="second">
                <baidu-map class="map" center="南京" :zoom="8">

                </baidu-map>
            </el-tab-pane>
            <el-tab-pane label="台风" center="江苏" :zoom="8">
                <baidu-map class="map" center="北京">

                </baidu-map>
            </el-tab-pane>
            <el-tab-pane label="暴雨" name="fourth">
                <baidu-map class="map" center="北京">

                </baidu-map>
            </el-tab-pane>
            <el-tab-pane label="卫星云图" name="fifth">
                <baidu-map class="map" center="北京">

                </baidu-map>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return{
            mapStyle:{
                styleJson:[
                    {
                        "featureType":"all",
                        "elementType":"geometry",
                        "stylers":{
                            "hue":"#007fff",
                            "saturation":89
                        }
                    },
                    {
                        "featureType":"all",
                        "elementType":"geometry",
                        "stylers":{
                            "color":"blue"
                        }
                    }
                ]
            }
        }
    },
    created(){

    },
    mounted(){
       
    },
    methods:{

    }
}
</script>

<style scoped lang = "scss">
.container{
    width: 100%;
    height: 100%;
    
    margin-top: 300px;
    position: relative;
}
.map {
  width: 100%;
  height: 400px;
}
</style>
