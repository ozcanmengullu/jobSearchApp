import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobList.vue"),
    },
    {
      path: "/jobDetails/:id",
      name: "jobDetails",
      component: () => import("../views/JobDetails.vue"),
    },
  ],
});

export default router;
