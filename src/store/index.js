
import { createStore } from 'vuex';

export default createStore({
  state: {
    orders: [],
    products: [],
    activeSessions: 0,
  },
  mutations: {
    SET_ORDERS(state, orders) {
      state.orders = orders;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ACTIVE_SESSIONS(state, count) {
      state.activeSessions = count;
    },
  },
  actions: {
    fetchOrders({ commit }) {
      // Запит на отримання замовлень
    },
    fetchProducts({ commit }) {
      // Запит на отримання продуктів
    },
  },
});
