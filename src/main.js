import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import i18n from "./i18n";

createApp(App).use(i18n).use(store).use(router).mount("#app");
