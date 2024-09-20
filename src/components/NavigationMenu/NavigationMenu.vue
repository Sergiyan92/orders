<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="d-flex">
    <nav class="d-flex w-25 justify-content-center mt-3">
      <ul class="d-flex  flex-column align-items-center list-unstyled text-center fw-bold">
        <li class="mb-2">
          <router-link to="/orders" class="text-decoration-none">Orders</router-link>
        </li>
        <li>
          <router-link to="/products" class="text-decoration-none">Products</router-link>
        </li>
      </ul>
    </nav> 
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
