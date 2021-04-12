import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "http://49.235.93.38:82/";
Vue.prototype.$axios = axios;

// axios.interceptors.request.use(function(config) {
//     config.headers["Access-Control-Allow-Credentials"] = true;
//     return config;
// }, function(err) {
//     console.log(err)
// })

Vue.config.productionTip = false;
// 引入element - ui插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
