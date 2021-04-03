import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.axios = require('axios');

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(require('vue-moment'));

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);



const router = new VueRouter({
  
  mode:'history',
  base:'/',
  fallback:true,
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
