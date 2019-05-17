<template>
  <div class="container" style="background:red">
    <!-- 主体分为三部分  头部 中部和底部
        头部：顶部导航栏
        中部：各种主要信息  轮播图 百度地图
        底部：版权信息
     -->
      <div class="top">
        <div class="first-line">
          11
          <div class="news">
            <p>>>最新关注</p>
            <br>
            <ul>
              <li><a href="http://www.mwr.gov.cn/xw/slyw/201905/t20190515_1197349.html">鄂竟平检查指导甘肃省水旱灾...</a></li>
              <li><a href="">蒋旭光检查南水北调中线河南..</a></li>
              <li><a href="">淮河防总在淮委召开工作会议..</a></li>
              <li><a href="">海河水利委员会组织开展海河..</a></li>
              <li><a href="">甘肃省水利厅召开全省山洪灾..</a></li>
              <li><a href="">太湖防总召开专题会议安排部..</a></li>
              <li><a href="">海河水利委员会与天津市气象..</a></li>
              <li><a href="">长江水利委员会完成2019年流..</a></li>
              <li><a href="">安徽省副省长张曙光率队调研..</a></li>
              <li><a href="">水利部专题部署2019年山洪灾..</a></li>
              
            </ul>
          </div>
        </div>
        <div class="second-line">
          <h4>今日雨水情</h4>
          <span>    2019年 第11期    5月13日8时至14日8时，湖南中部、江西中部、浙江西南部和东部、福建北部、海南等地降了中到大雨，局部暴雨，最大点海南白沙萌芽77毫米。全国主要江河水情总体平稳。</span>
        </div>
        <div class="third-line">33</div>
      </div>
      <div class="middle"></div>
      <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    position: relative;
    margin-top:200px;
    .top{
      display: flex;
      flex-direction: row;
      .first-line{
        width: 25%;
        height: 100%;
        background: yellow;
        margin-right: 3%;
        .news{
          border-radius:20px;
        }
      }
      .second-line{
        width: 44%;
        height: 100%;
        background: green;;
      }
      .third-line{
        width: 25%;
        height: 100%;
        margin-left: 3%;
        background: pink;
      }
    }
  }
</style>
