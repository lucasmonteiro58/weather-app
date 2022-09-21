import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { Icon } from "@iconify/vue";

import "./assets/main.css";

const app = createApp(App);

app.component("IconifyIcon", Icon);
app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
