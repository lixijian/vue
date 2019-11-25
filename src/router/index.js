import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Csrw from "../views/Csrw.vue";
import Whsm from "../views/Whsm.vue";
import Whsy from "../views/Whsy.vue";
import Whyj from "../views/Whyj.vue";
import Xmft from "../views/Xmft.vue";
import Xwdt from "../views/Xwdt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/",
    name: "csrw",
    component: Csrw
  },
  {
    path: "/",
    name: "whsm",
    component: Whsm
  },
  {
    path: "/",
    name: "whsy",
    component: Whsy
  },
  {
    path: "/",
    name: "whyj",
    component: Whyj
  },
  {
    path: "/",
    name: "xmft",
    component: Xmft
  },
  {
    path: "/",
    name: "xwdt",
    component: Xwdt
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
