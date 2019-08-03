import Vue from 'vue';
import Router from 'vue-router';

import Welcome from './views/Welcome.vue';

import CoreLayout from './layouts/CoreLayout.vue';

import Portfolio from './views/Portfolio.vue';
import Projects from './views/Projects.vue';
import Skills from './views/Skills.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/',
      name: 'coreLayout',
      component: CoreLayout,
      children: [
        {
          path: '/portfolio',
          name: 'portfolio',
          component: Portfolio,
        },
        {
          path: '/projects',
          name: 'projects',
          component: Projects,
        },
        {
          path: '/skills',
          name: 'skills',
          component: Skills,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
});
