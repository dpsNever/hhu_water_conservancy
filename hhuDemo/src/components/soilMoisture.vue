<template>
    <div class="container">
        <el-carousel :interval="4000" indicator-position="none" type="card" height="200px" id="el-carousel">
              <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.src" class="iImg" alt="#">
              </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            imgList:[
            {index: 0,src:require('../common/images/guany1.png')},
            {index: 1,src:"../common/images/guany2.png"},
            {index: 2,src:"./common/images/hongh2.png"},
            {index: 3,src:"./common/images/hongh2.png"},
            {index: 4,src:"./common/images/hongh2.png"},
            {index: 5,src:"./common/images/hongh2.png"}
            ]
        
        }
    }
}
</script>

<style scoped lang = "scss">
.container{
    width: 100%;
    height: 100%;
    
    margin-top: 100px;
}

.iImg{
    height: 200px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }
</style>
