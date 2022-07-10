/*
 * @Author: Mx
 * @Date: 2022-06-28 19:32:43
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps , setDefaultMountApp , start } from 'qiankun'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const app = [
  {
    name: 'sub-vue', // app name registered
    entry: '//localhost:10000/subapp/sub-vue',
    container: '#subapp-viewport',
    activeRule: '/sub-vue',
  },
  {
    name: 'sub-react',
    entry: '//localhost:20000/subapp/sub-react',
    container: '#subapp-viewport',
    activeRule: '/sub-react',
  },
];

registerMicroApps(app);
setDefaultMountApp('/sub-vue')
start()
