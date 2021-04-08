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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
