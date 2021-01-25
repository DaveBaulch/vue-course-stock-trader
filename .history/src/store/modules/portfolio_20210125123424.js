const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    }
  }
};

const actions = {};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
