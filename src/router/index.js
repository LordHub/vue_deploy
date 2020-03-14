import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About/About'
import Profile from "../components/Profile/Profile";
import Timeline from "../components/Timeline/Timeline";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    }
  ]
})
