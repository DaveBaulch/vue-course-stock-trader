import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './rountes';

Vue.use(VueRouter);

const router = new 

new Vue({
  el: '#app',
  render: (h) => h(App)
});
