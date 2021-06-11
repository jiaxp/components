import Vue from 'vue'
import App from './App.vue'
import Components from './../lib'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.use(Components)
new Vue({
  el: '#app',
  render: h => h(App)
})
