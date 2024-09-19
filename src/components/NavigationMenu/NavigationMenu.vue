<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation-menu">
    <ul>
      <li><router-link to="/orders">Orders</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation-menu {
    display: flex;
  background-color: #f8f9fa;
  padding: 10px;
}

.navigation-menu ul {
    display: flex;
    flex-direction: column;
  list-style-type: none;
  padding: 0;
}

.navigation-menu li {
  display: inline;
  margin-right: 20px;
}
</style>
