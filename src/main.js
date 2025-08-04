import { createApp } from "vue";
import App from "./App.vue";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store";
import router from "./router";
// styles
import "./assets/main.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

app.use(store);
app.use(router);
app.use(Toast);
app.use(vuetify);
app.mount("#app");
