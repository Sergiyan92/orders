<script>
  import { products } from '../data/products.js';  // Імпортуємо продукти
  
  export default {
    data() {
      return {
        products: products,  // Список продуктів
        selectedType: ''  // Вибраний тип для фільтрації
      };
    },
    computed: {
      productTypes() {
        return [...new Set(this.products.map(product => product.type))];  // Отримання унікальних типів продуктів
      },
      filteredProducts() {
        if (this.selectedType) {
          return this.products.filter(product => product.type === this.selectedType);
        }
        return this.products;
      }
    }
  };
  </script>
<template>
    <div class="products bg-body-secondary">
      <h2>Products List</h2>
      <label for="filter">Filter by Type:</label>
      <select v-model="selectedType" id="filter">
        <option value="">All</option>
        <option v-for="type in productTypes" :key="type" :value="type">
          {{ type }}
        </option>
      </select>
  
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          <h3>{{ product.title }}</h3>
          <p>Type: {{ product.type }}</p>
          <p>Price: {{ product.price[1].value }} {{ product.price[1].symbol }}</p>
          <p>Order: {{ product.order }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  
  
  <style scoped>
  .products {
    padding: 20px;
  }
  </style>
  