import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
