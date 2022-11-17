import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "bootstrap/dist/css/bootstrap.min.css"
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'
import "./assets/main.css";
import "../dist/main.css";
import "@headlessui/vue";
// import { Swiper, SwiperSlide } from 'swiper/vue'; 
// Import Swiper styles
// import 'swiper/css';

const app = createApp(App);
app.use(router);
// app.use(Unicon)
app.mount("#app");
