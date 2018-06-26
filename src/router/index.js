import Vue from "vue";
import Router from "vue-router";
import Questionnaire from "@/components/questionnaire/MainQuestion";
import SendQuestion from "@/components/questionnaire/SendQuestion";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/questionnaire" },
    {
      path: "/questionnaire",
      name: "Questionnaire",
      component: Questionnaire
    },
    {
      path: "/send_question",
      name: "SendQuestion",
      component: SendQuestion
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
