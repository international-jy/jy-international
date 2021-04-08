import Vue from "vue";
import VueRouter from "vue-router";

import contact from "./contact";
import news from "./news";
import show from "./show";
import main from "./main";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    redirect: "/home",
    children: [
      main,
      news,
      contact,
      show,
      {
        path: "show/model",
        component: () => import("../views/show/model.vue"),
      },
      {
        path: "contact/contactgy",
        component: () => import("../views/contact/conguanyu.vue"),
      },
      {
        path: "contact/contactlx",
        component: () => import("../views/contact/conlianxi.vue"),
      },
      {
        path: "contact/contactzp",
        component: () => import("../views/contact/conzhaopin.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
