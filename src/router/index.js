import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//webpack按需加载组件
const home = r => require.ensure([], () => r(require('../page/home/home')), ' home');
const test = r => require.ensure([], () => r(require('../page/home/test')), ' test');
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
});
