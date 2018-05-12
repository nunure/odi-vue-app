import Vue from "vue";
import Router from "vue-router";
import Questionnaire from "@/components/questionnaire/MainQuestion";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/questionnaire" },
    {
      path: "/questionnaire",
      name: "Questionnaire",
      component: Questionnaire
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
