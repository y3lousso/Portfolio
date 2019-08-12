import Vue from 'vue';
import Router from 'vue-router';

import Welcome from './views/Welcome.vue';

import CoreLayout from './layouts/CoreLayout.vue';

import Timeline from './views/Timeline.vue';
import Portfolio from './views/Portfolio.vue';
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
          path: '/timeline',
          name: 'timeline',
          component: Timeline,
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: Portfolio,
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
