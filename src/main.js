import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

AOS.init();
