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
    state.funds += stockPrice * quantity;
};
  },
  'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record)); // remove item from array
    }
    state.funds += stockPrice * quantity;
};

const actions = {};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
