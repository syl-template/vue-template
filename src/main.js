import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from '@components/globalComponents'
import {LocalStorageUtil } from "./util/LocalStorageUtil"
Vue.use(globalComponents)

Vue.config.productionTip = false

Vue.mixin(LocalStorageUtil)

// console.log(Vue.mixins)
new Vue({
  router,
  store,
  // mixins:[LocalStorageUtil],
  render: h => h(App)
}).$mount('#app')
