<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const filterType = ref("all");

const filteredProducts = computed(() => store.getters.filteredProducts);

const updateFilter = () => {
  store.commit("setFilterType", filterType.value);
};

const formatWarrantyDates = (guarantee) => {
  return `
    <div>
      <span>Start: ${new Date(
        guarantee.start
      ).toLocaleDateString()}</span><br />
      <span>End: ${new Date(guarantee.end).toLocaleDateString()}</span>
    </div>
  `;
};
</script>

<template>
  <div class="products container bg-light p-4">
    <div class="d-flex align-items-center mb-3">
      <h2 class="me-4">Products List</h2>
      <label for="typeFilter" class="me-2">Type:</label>
      <select
        v-model="filterType"
        @change="updateFilter"
        class="form-select w-25"
      >
        <option value="all">All</option>
        <option value="Monitors">Monitors</option>
        <option value="Mouse">Mouse</option>
      </select>
    </div>

    <ul class="list-unstyled">
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        class="d-flex align-items-center justify-content-between border rounded p-3 mb-2 bg-white"
      >
        <h3 class="mb-1">{{ product.title }}</h3>
        <p class="mb-1">Type: {{ product.type }}</p>
        <p v-html="formatWarrantyDates(product.guarantee)" class="mb-1"></p>
        <div>
          <span
            v-for="price in product.price"
            :key="price.symbol"
            class="d-block"
          >
            {{ price.value }} {{ price.symbol }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.products {
  height: 100vh;
}
</style>
