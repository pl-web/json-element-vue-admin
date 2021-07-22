import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import V from '@/mixins/v';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.component('V', V);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
