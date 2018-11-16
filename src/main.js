import Vue from "vue";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/fr";
import router from "./router";
import App from "./App";
import "./assets/style/global.scss";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";

Vue.use(VueResource);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

// Allow vue-ressource too set a path before sending request to back api
Vue.http.options.root = process.env.VUE_APP_API_URL;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
