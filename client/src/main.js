// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VModal from 'vue-js-modal';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './stylesheets/app.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VModal);
Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

Vue.component('pagination');
Vue.component('people');
Vue.component('searchfilter');
Vue.component('user');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
