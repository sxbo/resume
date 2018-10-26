import Vue from 'vue'
import Router from 'vue-router'
import HelloResume from '@/components/HelloResume';
import AboutMe from '@/components/AboutMe';
import AboutSite from '@/components/AboutSite';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloResume',
      component: HelloResume
    },
    {
      path:'/aboutSite',
      name:'ThisSite',
      component:AboutSite
    },
    {
      path:'/aboutMe',
      name:'AboutMe',
      component:AboutMe
    }
  ]
})
