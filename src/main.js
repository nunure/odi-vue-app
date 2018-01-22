// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
/* App component */
import App from './components/App';
/* App css */
import './assets/style/global.scss';

/* Twitter Bootstrap JS (this could also be handled in an app.js file) */
// require('bootstrap');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
