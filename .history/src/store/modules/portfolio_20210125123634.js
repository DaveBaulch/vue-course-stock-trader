const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
  },
  'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      stock
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
