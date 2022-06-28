/*
 * @Author: Mx
 * @Date: 2022-06-28 19:32:43
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps , start } from 'qiankun'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const app = [
  {
    name: 'sub-vue', // app name registered
    entry: '//localhost:8070',
    container: '#subapp-viewport',
    activeRule: '/sub-vue',
  },
  {
    name: 'sub-react',
    entry: '//localhost:8090',
    container: '#subapp-viewport',
    activeRule: '/sub-react',
  },
];

registerMicroApps(app);
start()
