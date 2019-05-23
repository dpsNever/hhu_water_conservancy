<template>
    <div class="container">
      <baidu-map class="map" center="江苏" :zoom="8">

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
