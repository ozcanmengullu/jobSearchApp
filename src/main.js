import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from './store';
import { BootstrapVue, BFormInput, BIcon, BPagination, IconsPlugin } from "bootstrap-vue";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue)
Vue.component('b-form-input', BFormInput)
Vue.component('b-icon', BIcon)
Vue.component('b-pagination', BPagination)
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
