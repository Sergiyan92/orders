import { createStore } from "vuex";
import { products } from "../data/products.js"; // Импортируйте ваши продукты
import { orders } from "../data/orders.js";

const store = createStore({
  state() {
    return {
      products: products,
      orders: orders,
      selectedOrder: null,
      showDeleteConfirmation: false,
      orderToDelete: null,
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
    selectOrder(state, order) {
      state.selectedOrder = order;
    },
    deselectOrder(state) {
      state.selectedOrder = null;
    },
    confirmDelete(state, order) {
      state.showDeleteConfirmation = true;
      state.orderToDelete = order;
    },
    deleteOrder(state) {
      state.orders = state.orders.filter(order => order !== state.orderToDelete);
      state.selectedOrder = null;
      state.showDeleteConfirmation = false;
      state.orderToDelete = null;
    },
    cancelDelete(state) {
      state.showDeleteConfirmation = false;
      state.orderToDelete = null;
    },
    setFilterType(state, type) {
      state.filterType = type;
    },
  },
  getters: {
    filteredOrders(state) {
      return state.orders;
    },
    // allOrders: (state) => state.orders,
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
