import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks.js';
import requestsModule from './modules/requests/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stocks
  },
  state() {
    return {
      // userId: 'c3'
    };
  },
  getters: {
    // userId(state) {
    //   return state.userId;
    // }
  }
});

export default store;
