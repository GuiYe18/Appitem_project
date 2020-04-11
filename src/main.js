import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import App from './App.vue'

import Home from './components/Home.vue';

Vue.use(Element);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  container:{Home}
}).$mount('#app')
