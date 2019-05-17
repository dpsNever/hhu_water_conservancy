<template>
  <div id="app" >
    <ul class="top-nav">
      <li><router-link v-bind:to="'/'" exact>首页</router-link></li>
      <li><router-link v-bind:to="'/main'">洪旱告警</router-link></li>
      <li><router-link v-bind:to="'/main'">水情查询</router-link></li>
      <li><router-link v-bind:to="'/main'">水利风景区</router-link></li>
      <li><router-link v-bind:to="'/main'">墒情信息</router-link></li>
      <li><router-link v-bind:to="'/main'">关于我们</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style lang = "scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 1400px;
  height: 200px;
  background:#fff url(./common/images/topNavBG.png) no-repeat center;
 .top-nav{
  display: flex;
  height: 20px;
  flex-direction: row;
  list-style: none;
  color: #000;
  position: relative;
  top:165px;
  
  li{
    height: 20px;
  }
}
body{
   margin: 0;
  padding: 0;
}

}
a{
  text-decoration: none;
}



</style>
