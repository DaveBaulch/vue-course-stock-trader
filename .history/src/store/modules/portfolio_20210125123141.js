const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {}
};

const actions = {

};

const getters = {
  stocks: (state) => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
