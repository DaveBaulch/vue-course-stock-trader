import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.httphis.$http.get('data.json', data);
};
