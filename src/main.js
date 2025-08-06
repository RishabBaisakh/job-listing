import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store";
import router from "./router";
// primevue
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
// styles
import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toast);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
