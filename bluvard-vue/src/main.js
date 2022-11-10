import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import "./assets/main.css";
import "../dist/main.css"

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount("#app");
