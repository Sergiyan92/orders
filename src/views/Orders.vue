<script>
import { orders } from "../data/orders.js";

export default {
  data() {
    return {
      orders: orders,
      selectedOrder: null,
      showDeleteConfirmation: false,
      orderToDelete: null,
    };
  },
  methods: {
    selectOrder(order) {
      this.selectedOrder = order;
    },
    deselectOrder() {
      this.selectedOrder = null;
    },
    formatDate(date, format) {
      const options = {
        short: { month: "2-digit", day: "2-digit", year: "numeric" },
        full: { day: "2-digit", month: "long", year: "numeric" },
      };

      const dateObj = new Date(date);
      return new Intl.DateTimeFormat("en-US", options[format]).format(dateObj);
    },
    calculateTotal(products) {
      return products.reduce((total, product) => {
        return total + this.getDefaultPrice(product.price).value;
      }, 0);
    },
    getDefaultPrice(prices) {
      return (
        prices.find((price) => price.isDefault) || { value: 0, symbol: "USD" }
      );
    },
    confirmDelete(order) {
      this.showDeleteConfirmation = true;
      this.orderToDelete = order;
    },
    deleteOrder() {
      this.orders = this.orders.filter((order) => order !== this.orderToDelete);
      this.selectedOrder = null;
      this.showDeleteConfirmation = false;
      this.orderToDelete = null;
    },
    cancelDelete() {
      this.showDeleteConfirmation = false;
      this.orderToDelete = null;
    },
  },
};
</script>

<template>
  <div class="orders bg-body-secondary w-75">
    <h2>Orders List</h2>
    <div style="display: flex">
      <ul>
        <li
          v-for="order in orders"
          :key="order.id"
          @click="selectOrder(order)"
          class="order-item"
        >
          <h3>{{ order.title }}</h3>
          <p style="display: flex">
            <span>{{ formatDate(order.date, "short") }}</span>
            <span>{{ formatDate(order.date, "full") }}</span>
          </p>

          <p>Products Count: {{ order.products.length }}</p>
          <p v-for="product in order.products" :key="product.id">
            <span v-for="price in product.price" :key="price.symbol">
              {{ price.value }} {{ price.symbol }}
            </span>
          </p>

          <button @click.stop="confirmDelete(order)">Delete Order</button>
        </li>
      </ul>

      <div v-if="selectedOrder" class="order-details">
        <button class="close-btn" @click="deselectOrder">Close</button>
        <div v-if="selectedOrder.products.length === 0">
          <p>No products in this order</p>
        </div>
        <ul v-else>
          <li v-for="product in selectedOrder.products" :key="product.id">
            <h3>{{ product.title }}</h3>
            <p>Type: {{ product.type }}</p>
          </li>
        </ul>
      </div>


      <div v-if="showDeleteConfirmation" class="modal-overlay">
        <div class="modal-content">
          <p>Are you sure you want to delete this order?</p>
          <h3>{{ orderToDelete?.title }}</h3>
          <p>Total Products: {{ orderToDelete?.products.length }}</p>
          <button @click="deleteOrder">Yes</button>
          <button @click="cancelDelete">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orders {
  padding: 20px;
}

.order-item {
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.order-details {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

.close-btn {
  background-color: #f1f1f1;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-content button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
