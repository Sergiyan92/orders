<script>
import { mapState, mapMutations } from "vuex";
import CloseIcon from "../components/icons/CloseIcon.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";

export default {
  components: {
    DeleteIcon,
    CloseIcon,
  },
  computed: {
    ...mapState([
      "orders",
      "selectedOrder",
      "showDeleteConfirmation",
      "orderToDelete",
    ]),
    filteredOrders() {
      return this.orders;
    },
  },
  methods: {
    ...mapMutations([
      "selectOrder",
      "deselectOrder",
      "confirmDelete",
      "deleteOrder",
      "cancelDelete",
    ]),
    formatDate(date, format) {
      const options = {
        short: { month: "2-digit", day: "2-digit", year: "numeric" },
        full: { day: "2-digit", month: "long", year: "numeric" },
      };
      const dateObj = new Date(date);
      return new Intl.DateTimeFormat("en-US", options[format]).format(dateObj);
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
          v-for="order in filteredOrders"
          :key="order.id"
          @click="selectOrder(order)"
          class="order-item"
        >
          <h3>{{ order.title }}</h3>
          <p>Products Count: {{ order.products.length }}</p>
          <p style="display: flex; flex-direction: column">
            <span>{{ formatDate(order.date, "short") }}</span>
            <span>{{ formatDate(order.date, "full") }}</span>
          </p>
          <p
            v-if="order.products && order.products.length"
            v-for="product in order.products"
            :key="product.id"
          >
            <span style="display: flex; flex-direction: column">
              <span v-for="price in product.price" :key="price.symbol">
                {{ price.value }} {{ price.symbol }}
              </span>
            </span>
          </p>
          <p v-else style="display: flex; flex-direction: column">
            <span>00 USD</span>
            <span> 00 UAH</span>
          </p>

          <button
            @click.stop="confirmDelete(order)"
            style="background-color: white; border: none"
          >
            <DeleteIcon />
          </button>
        </li>
      </ul>

      <div v-if="selectedOrder" class="order-details">
        <button class="close-btn" @click="deselectOrder">
          <CloseIcon class="close-icon" />
        </button>
        <h3 style="padding-left: 32px; padding-top: 5px;">{{ selectedOrder.title }}</h3>
        <div v-if="selectedOrder.products.length === 0">
          <p>No products in this order</p>
        </div>
        <ul v-else>
          <li v-for="product in selectedOrder.products" :key="product.id">
            <h5>{{ product.title }}</h5>
            <p>Type: {{ product.type }}</p>
          </li>
        </ul>
      </div>

      <div v-if="showDeleteConfirmation" class="modal-overlay">
        <div class="modal-content">
          <button class="close-btn" @click="cancelDelete"><CloseIcon /></button>
          <p style="margin: 20px 0 0 20px;">Are you sure you want to delete this order?</p>
          <h3 style="margin: 20px 0 0 20px;">{{ orderToDelete?.title }}</h3>
          <p style="margin: 20px 0 5px 20px;">Total Products: {{ orderToDelete?.products.length }}</p>
          <div class="modal-footer">
            <button
              @click="deleteOrder"
              style="background-color: inherit; border: none"
            >
              <span style="color: white; font-weight: 600">Delete</span>
            </button>
            <button
              @click="cancelDelete"
              style="border: none; padding: 5px 15px; border-radius: 20px"
            >
              <span style="color: red; font-weight: 600">Cancel</span>
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
  padding: 20px;
}

.order-item {
  display: flex;
  align-items: center;
  width: 530px;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
}

.order-details {
  position: relative;
  margin-left: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.close-btn {
  background-color: white;
  border: none;
  padding: 0;
}
.close-icon {
  cursor: pointer;
  width: 15px;
  height: 15px;
}
.delete-icon {
  cursor: pointer;
  width: 10px;
  height: 10px;
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
  top: -14px;
  right: -15px;
  background: rgb(241, 238, 238);
  border-radius: 100px;
  cursor: pointer;
  width: 30px;
  height: 30px;
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
