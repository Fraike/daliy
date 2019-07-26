import Vue from 'vue'
import App from './App.vue'
import { store } from './store/index'
import { router } from './router'
import fastclick from 'fastclick'
import 'amfe-flexible'; //配合pxtorem
import './assets/reset.css' //初始化css样式

Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
