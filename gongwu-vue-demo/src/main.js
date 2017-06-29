import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import config from '../src/router-config'
const  router =new Router(config);
Vue.use(Router);
new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
