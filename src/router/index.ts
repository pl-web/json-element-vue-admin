import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/views/Profile.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Password from '@/views/Password.vue';
import Error from '@/views/Error.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
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
      component: Password,
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    }
  ],
});
