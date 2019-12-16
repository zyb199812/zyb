import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import Axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios,Axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
