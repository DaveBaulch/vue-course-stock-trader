import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});

export default store;
