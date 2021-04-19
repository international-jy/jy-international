import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "github-markdown-css/github-markdown.css";
// Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "http://49.235.93.38:82/";
import "github-markdown-css/github-markdown.css";
Vue.prototype.$axios = axios;
import animated from "animate.css";
Vue.use(animated);
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

function goPAGE() {
  let baseUrl = location.origin;
  // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {} else {}
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    // window.location.href = baseUrl + "/m";
    // return false
  } else {
    window.location.href = baseUrl + "/p";
  }
}
goPAGE();
