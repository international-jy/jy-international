import Vue from "vue";
import VueRouter from "vue-router";

import contact from "./contact";
import news from "./news";
import show from "./show";
import main from './main';

Vue.use(VueRouter);
const routes = [{
    path: "/",
    component: () =>
        import ('../views/index.vue'),
    redirect: '/home',
    children: [
        main,
        news,
        contact,
        show
    ]
}];

const router = new VueRouter({
    routes,
});

export default router;