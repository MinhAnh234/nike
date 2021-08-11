import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './routes'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import JQuery from 'jquery'
window.$ = JQuery

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
