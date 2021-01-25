import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.htt.get('data.json', data);
};
