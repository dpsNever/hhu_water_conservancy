<template>
  <div id="app" >
    <ul class="top-nav">
      <li><router-link v-bind:to="'/'" exact><img id="img1" src="./common/images/mainpage.png" alt=""></router-link></li>
      <li><router-link v-bind:to="'/main'"><img id="img2" src="./common/images/hongh1.png" alt=""></router-link></li>
      <li><router-link v-bind:to="'/soil'"><img id="img3" src="./common/images/shuiq1.png" alt=""></router-link></li>
      <li><router-link v-bind:to="'/water'"><img id="img4" src="./common/images/shangq1.png" alt=""></router-link></li>
      <li><router-link v-bind:to="'/about'"><img id="img5" src="./common/images/guany1.png" alt=""></router-link></li>
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
 .top-nav{
  display: flex;
  background: #000;
  width: 100%;
  flex-direction: row;
  list-style: none;
  color: #000;
  position: relative;
  top:150px;
    img{
      width: 160px;
      height: 100%;  
    }
  li{
    width: 100%;
    height: 120px;
  }
}


#img1{
  margin-top: -25px;
  &:hover{
  content: url('./common/images/mainpage2.png');
}
}
#img2:hover{
  content: url('./common/images/hongh2.png');
}
#img3:hover{
  content: url('./common/images/shuiq2.png');
}
#img4:hover{
  content: url('./common/images/shangq2.png');
}
#img5:hover{
  content: url('./common/images/guany2.png');
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
