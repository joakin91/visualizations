import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
