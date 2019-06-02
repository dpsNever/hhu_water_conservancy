<template>
    <div class="container">
      <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            
        
        }
    }
}
</script>

<style scoped lang = "scss">
.container{
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 300px;
}
.map{
  width: 100%;
  height: 400px;
}

</style>
