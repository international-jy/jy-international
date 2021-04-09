import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue.config.productionTip = false;
import axios from "axios";
Vue.prototype.$axios = axios;
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