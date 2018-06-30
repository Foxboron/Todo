import Vue from "vue";

import "expose-loader?$!expose-loader?jQuery!jquery";
//import "quasar-framework/dist/umd/icons.material-icons.umd.min.js";

import VueRouter from "router";
import Axios from 'axios'

import Quasar, { QLayout, QInput, QBtn, Dialog, Ripple } from "quasar-framework/dist/umd/quasar.mat.umd.min.js";

Vue.use(VueRouter);
Vue.use(Quasar, { components: [QLayout, QInput, QBtn], plugins: [Dialog], directives: [Ripple] });


Axios.defaults.headers.common["Content-Type"] = "application/json";
Vue.prototype.$http = Axios;

const router = new VueRouter({
  routes: [
      {path: "/", component: Todo, name: 'Todo'}
  ]
});

import Todo from "./components/Todo.vue";

new Vue({
    el: '#q-app',
    router,
    render: h => h(Todo),
  })
