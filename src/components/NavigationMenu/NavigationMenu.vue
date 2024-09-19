<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="d-flex justify-content-center mt-5">
    <ul class="d-flex flex-column align-items-center list-unstyled text-center fw-bold">
      <li class="mb-2">
        <router-link to="/orders" class="text-decoration-none text-black">Orders</router-link>
      </li>
      <li>
        <router-link to="/products" class="text-decoration-none text-black">Products</router-link>
      </li>
    </ul>
  </nav>
</template>

