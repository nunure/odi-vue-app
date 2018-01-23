import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Questionnaire from '@/components/questionnaire/Questionnaire';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire,
    },
  ],
});

export default router;
