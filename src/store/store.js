import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
});

export default store;
