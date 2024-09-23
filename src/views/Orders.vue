<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CloseIcon from "../components/icons/CloseIcon.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";

const store = useStore();

const orders = computed(() => store.state.orders);
const selectedOrder = computed(() => store.state.selectedOrder);
const showDeleteConfirmation = computed(
  () => store.state.showDeleteConfirmation
);
const orderToDelete = computed(() => store.state.orderToDelete);

const selectOrder = (order) => store.commit("selectOrder", order);
const deselectOrder = () => store.commit("deselectOrder");
const confirmDelete = (order) => store.commit("confirmDelete", order);
const deleteOrder = () => store.commit("deleteOrder");
const cancelDelete = () => store.commit("cancelDelete");

const formatDate = (date, format) => {
  const options = {
    short: { month: "2-digit", day: "2-digit", year: "numeric" },
    full: { day: "2-digit", month: "long", year: "numeric" },
  };
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("en-US", options[format]).format(dateObj);
};
</script>

<template>
  <div class="orders container bg-light p-4">
    <h2>Orders List</h2>
    <div class="d-flex">
      <ul class="list-unstyled">
        <li
          v-for="order in orders"
          :key="order.id"
          @click="selectOrder(order)"
          class="order-item d-flex justify-content-between align-items-center p-3 border rounded mb-2 bg-white"
        >
          <h3 class="mb-1">{{ order.title }}</h3>
          <p class="mb-1">Products Count: {{ order.products.length }}</p>
          <p class="mb-0">
            <span>{{ formatDate(order.date, "short") }}</span
            ><br />
            <span>{{ formatDate(order.date, "full") }}</span>
          </p>
          <p
            v-if="order.products && order.products.length"
            class="mb-0 text-center"
          >
            <span
              v-for="product in order.products"
              :key="product.id"
              class="d-block"
            >
              <span
                v-for="price in product.price"
                :key="price.symbol"
                class="d-block"
              >
                {{ price.value }} {{ price.symbol }}
              </span>
            </span>
          </p>
          <p v-else class="mb-0">
            <span>00 USD</span><br />
            <span>00 UAH</span>
          </p>

          <button
            @click.stop="confirmDelete(order)"
            class="btn btn-link p-0 text-danger"
          >
            <DeleteIcon />
          </button>
        </li>
      </ul>

      <div
        v-if="selectedOrder"
        class="w-100 h-100 position-relative border rounded bg-white p-3 ms-2"
      >
        <button class="close-btn" @click="deselectOrder">
          <CloseIcon class="" />
        </button>
        <h3 class="mt-2 ms-4">{{ selectedOrder.title }}</h3>
        <div v-if="selectedOrder.products.length === 0">
          <p class="ms-4">No products in this order</p>
        </div>
        <ul v-else>
          <li
            class="d-flex"
            v-for="product in selectedOrder.products"
            :key="product.id"
          >
            <h5>{{ product.title }}</h5>
            <p class="ms-5">Type: {{ product.type }}</p>
          </li>
        </ul>
      </div>

      <div v-if="showDeleteConfirmation" class="modal-overlay">
        <div class="modal-content">
          <button class="close-btn" @click="cancelDelete"><CloseIcon /></button>
          <p style="margin: 20px 0 0 20px">
            Are you sure you want to delete this order?
          </p>
          <h3 style="margin: 20px 0 0 20px">{{ orderToDelete?.title }}</h3>
          <p style="margin: 20px 0 5px 20px">
            Total Products: {{ orderToDelete?.products.length }}
          </p>
          <div class="modal-footer">
            <button @click="deleteOrder" class="delete-btn" style="">
              <span style="color: white; font-weight: 600">Delete</span>
            </button>
            <button @click="cancelDelete" class="btn-cancel">
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orders {
  height: 100vh;
}

.order-item {
  width: 550px;
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
  position: relative;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  border: none;
  top: -14px;
  right: -15px;
  background: rgb(241, 238, 238);
  border-radius: 100px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.btn-cancel {
  border: none;
  border-radius: 20px;
  color: red;
  padding: 5px 30px;
  font-weight: 600;
}

.delete-btn {
  background-color: inherit;
  border: none;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  border-bottom: 0px;
  border-radius: 0 0 5px 5px;
  background-color: #24a718;
  padding: 10px;
}
</style>
