import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Error from '@/views/Error.vue';
import Layout from '@/layout/index.vue'

Vue.use(Router);

export const mainRoutes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/password',
    name: 'password',
    component: () => import(/* webpackChunkName: "password" */ '@/views/Password.vue'),
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...mainRoutes,
    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
});
