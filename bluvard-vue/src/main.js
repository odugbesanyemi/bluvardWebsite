import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { CAlert } from '@coreui/vue';
import '@coreui/coreui/dist/css/coreui.min.css'
import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.use(CAlert)

app.mount("#app");
