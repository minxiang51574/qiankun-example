/*
 * @Author: Mx
 * @Date: 2022-06-28 19:32:43
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps , setDefaultMountApp , start } from 'qiankun'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import microApps from './micro-app'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 添加下发子应用的props
const apps = microApps

registerMicroApps(apps);
setDefaultMountApp('/qiankun/sub-vue')
start()
