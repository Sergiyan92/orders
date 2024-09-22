import { createRouter, createWebHistory } from "vue-router";
import Orders from "../views/Orders.vue";
import Products from "../views/Products.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
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
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
