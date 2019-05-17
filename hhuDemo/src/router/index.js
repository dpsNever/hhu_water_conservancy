import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/mainPage'
import SoilMoisture from '@/components/soilMoisture'
import WaterSituation from '@/components/waterSituation'
import AboutMe from '@/components/aboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: MainPage,
      component: MainPage
    },
    {
      path: '/soil',
      name: SoilMoisture,
      component: SoilMoisture
    },
    {
      path: '/water',
      name: WaterSituation,
      component: WaterSituation
    },
    {
      path: '/about',
      name: AboutMe,
      component: AboutMe
    }
   
    
  ]
})
