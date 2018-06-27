require("expose-loader?$!expose-loader?jQuery!jquery");
require("bootstrap/dist/js/bootstrap.bundle.js");

import Vue from "vue";
import VueRouter from "router";
Vue.use(VueRouter);

import Axios from 'axios'
Axios.defaults.headers.common["Content-Type"] = "application/json";
Vue.prototype.$http = Axios;

const router = new VueRouter({
  routes: [
      {path: "/", component: Todo, name: 'Todo'}
  ]
});

import Todo from "./components/Todo.vue";

const app = new Vue({
  el: "#app",
  template: '<Todo/>',
  components: {Todo}
})
