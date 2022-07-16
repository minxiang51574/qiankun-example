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
import store from "./store.js"
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
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

// 添加下发子应用的props
const apps = app.map(item=> {
  return {
    ...item,
    props:{
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

registerMicroApps(apps);
setDefaultMountApp('/sub-vue')
start()
