import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json', data)
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        cost funds = data.funds;
        
      }
    })
};
