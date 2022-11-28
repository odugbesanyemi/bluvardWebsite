import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "../dist/main.css";
import "@headlessui/vue";
// import VueTablerIcons from "vue-tabler-icons";

const app = createApp(App);
app.use(router);
// app.use(VueTablerIcons);
app.mount("#app");
