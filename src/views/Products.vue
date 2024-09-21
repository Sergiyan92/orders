<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      filterType: "all",
    };
  },
  computed: {
    ...mapGetters(["filteredProducts"]),
  },
  methods: {
    updateFilter() {
      this.$store.commit("setFilterType", this.filterType);
    },
    formatWarrantyDates(guarantee) {
      return `Start ${new Date(
        guarantee.start
      ).toLocaleDateString()} End ${new Date(
        guarantee.end
      ).toLocaleDateString()}`;
    },
  },
};
</script>

<template>
  <div class="products w-75 bg-body-secondary">
    <h2>Products List</h2>
    <label for="typeFilter">Filter by Type:</label>
    <select v-model="filterType" @change="updateFilter">
      <option value="all">All</option>
      <option value="Monitors">Monitors</option>
      <option value="Mouse">Mouse</option>
    </select>

    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <h3>{{ product.title }}</h3>
        <p>Type: {{ product.type }}</p>
        <p>Guarantee: {{ formatWarrantyDates(product.guarantee) }}</p>
        <p>
          Price:
          <span v-for="price in product.price" :key="price.symbol">
            {{ price.value }} {{ price.symbol }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.products {
  height: 100vh;
  padding: 20px;
}
.products h2 {
  margin-bottom: 20px;
}
</style>
