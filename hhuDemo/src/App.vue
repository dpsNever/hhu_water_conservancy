<template>
  <div id="app" >
    <div class="navLogo">
      <img src="./common/images/navLogo.png" alt="">
    </div>
    <ul class="top-nav">
      <li><router-link v-bind:to="'/'" exact><img id="img1" src="./common/images/home2.png" alt=""></router-link></li>
      <li><router-link v-bind:to="'/main'">洪旱告警</router-link></li>
      <li><router-link v-bind:to="'/soil'">水情查询</router-link></li>
      <li><router-link v-bind:to="'/water'">墒情信息</router-link></li>
      <li><router-link v-bind:to="'/about'">关于我们</router-link></li>
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
  height: 290px;
  background:#fff url(./common/images/organization.jpg) no-repeat center;
  border-radius: 20px;
  .navLogo{
    position: absolute;
    width: 750px;
    height: 140px;
    top: 104px;
  }
  .top-nav{
    display: flex;
    background: #ffffff;
    width: 97%;
    flex-direction: row;
    list-style: none;
    color: #000;
    background: rgb(52,130,196);
    position: relative;
    top:235px;
    margin: 0 auto;
    font-family: '黑体';
    font-size: 28px;
    border-radius: 10px;
    #img1{
      margin-top: 10px;
    }
    li{
      width: 100%;
      height: 50px;
      line-height: 50px;
      img{
        height: 30px;
        width: 30px;
      }
      a{
        color: #fff;
        &:hover{
          color: #c4c4c4;
        }
      }
  }
 }
}


#img1{
  margin-top: -25px;
  &:hover{
  content: url('./common/images/home1.png');
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
