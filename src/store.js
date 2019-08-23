/*
|-------------------------------------------------------------------------------
| VUEX store.js
|-------------------------------------------------------------------------------
| Builds the data store from all of the modules for the Roast app.
*/
/*
  Adds the promise polyfill for IE 11
*/
/*
    Imports Vue and Vuex
*/
import Vue from 'vue';
import Vuex from 'vuex';

/*
    Imports all of the modules used in the application to build the data store.
*/
import { mail } from './modules/mail.js';

require('es6-promise').polyfill();

/*
    Initializes Vuex on Vue.
*/
Vue.use(Vuex);

/*
  Exports our data store.
*/
export default new Vuex.Store({
  modules: {
    mail,
  },
});
