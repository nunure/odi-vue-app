// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
import App from './components/App';
import './assets/style/global.scss';

/* Twitter Bootstrap JS (this could also be handled in an app.js file) */
require('bootstrap');

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Attach the Vue instance to the window,
  // so it's available globally.
  created() {
    window.Vue = this;
  },
  router,
  render: h => h(App),
});
