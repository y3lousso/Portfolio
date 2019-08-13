import Vue from 'vue';
import FlagIcon from 'vue-flag-icon';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './quasar';

Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
