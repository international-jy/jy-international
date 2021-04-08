import Vue from "vue";
import VueRouter from "vue-router";

import contact from "./contact";
import news from "./news";
import show from "./show";
import main from "./main";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
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
        path: "news/list",
        component: () => import("../views/news/newsList.vue"),
      },
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