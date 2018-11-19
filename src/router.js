import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Questionnaire from "@/views/MainQuestion";
import SendQuestion from "@/views/SendQuestion";
import EmptyQuestion from "@/views/EmptyQuestion";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Home
    },
    {
      path: "/questionnaire",
      name: "Questionnaire",
      component: Questionnaire
    },
    {
      path: "/send_question",
      name: "SendQuestion",
      component: SendQuestion
    },
    {
      path: "/empty_question",
      name: "EmptyQuestion",
      component: EmptyQuestion
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

export default router;
