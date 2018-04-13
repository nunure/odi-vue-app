import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Questionnaire from '@/components/questionnaire/MainQuestion';
import MainContact from '@/components/contact/MainContact';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/accueil' },
    {
      path: '/accueil',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: MainContact,
    },
  ],
  linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active', // active class for *exact* links.
});

export default router;
