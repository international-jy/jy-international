import Vue from "vue";
import VueRouter from "vue-router";

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
    meta: {
      keepAlive: true,
    },
    children: [
      main,
      news,
      show,
      {
        path: "environment",
        component: () => import("../views/environment/environment.vue"),
      },
      {
        path: "news/list",
        component: () => import("../views/news/newsList.vue"),
      },
      {
        path: "show/model",
        component: () => import("../views/show/model.vue"),
      },
      {
        path: "contact/1",
        component: () => import("../views/contact/conguanyu.vue"),
      },
      {
        path: "contact/2",
        component: () => import("../views/contact/conlianxi.vue"),
      },
      {
        path: "contact/3",
        component: () => import("../views/contact/conzhaopin.vue"),
      },
      {
        path: "show/search",
        component: () => import("../views/show/search.vue"),
      },
      {
        path: "show/search2",
        component: () => import("../views/show/seachN"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
