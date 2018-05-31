// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/fr";
import router from "./router";
import App from "./components/App";
import "./assets/style/global.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueResource);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // Attach the Vue instance to the window,
  // so it's available globally.
  created() {
    window.Vue = this;
  },
  router,
  render: h => h(App)
});
