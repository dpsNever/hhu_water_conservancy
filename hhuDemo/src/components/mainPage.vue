<template>
    <div class="container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="洪水" name="first">
                <baidu-map class="map" center="江苏" :zoom="8">

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
