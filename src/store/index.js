import { createStore } from "vuex";
import { products } from "../data/products.js"; // Импортируйте ваши продукты
import { orders } from "../data/orders.js";

const store = createStore({
  state() {
    return {
      products: products,
      orders: orders,
      filterType: "all", // Начальный фильтр
    };
  },
  actions: {
    fetchOrders({ commit }) {
      // Fetch orders from an API or static data
      const orders = [
        // Your orders data
      ];
      commit('setOrders', orders);
    },
    createOrder({ commit }, order) {
      commit('addOrder', order);
    },
    removeOrder({ commit }, orderId) {
      commit('deleteOrder', orderId);
    },
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    },
    addOrder(state, order) {
      state.orders.push(order);
    },
    deleteOrder(state, orderId) {
      state.orders = state.orders.filter(order => order.id !== orderId);
    },
    setFilterType(state, type) {
      state.filterType = type;
    },
  },
  getters: {
    allOrders: (state) => state.orders,
    filteredProducts(state) {
      if (state.filterType === "all") {
        return state.products;
      }
      return state.products.filter(
        (product) => product.type === state.filterType
      );
    },
  },
});

export default store;
