import { createApp } from "vue";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Імпорт CSS Bootstrap
import "bootstrap"; // Імпорт JavaScript Bootstrap (опційно)

import App from "./App.vue";
import router from "./router";
import store from "./store";
createApp(App).use(router).use(store).mount("#app");
