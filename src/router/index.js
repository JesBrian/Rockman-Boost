import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/Pages/IndexPage/IndexPage.vue')
    },
    {
      path: '/game',
      component: () => import('../views/Pages/GamePage/GamePage.vue')
    }
  ]
})
