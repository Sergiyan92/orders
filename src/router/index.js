import { createRouter, createWebHistory } from "vue-router";
import Orders from "../views/Orders.vue";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
