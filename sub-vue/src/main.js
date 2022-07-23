/*
 * @Author: Mx
 * @Date: 2022-07-01 23:24:47
 * @Description: 
 */
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import { store as commonStore } from '../../base/common'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

let instance = null
function render(props = {}) {
  const { container } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/qiankun/sub-vue' : '/qiankun',
    mode: 'history', 
    routes,
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('应用独立运行的环境');

  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {

  console.log('[vue] props from main framework', props)

  // 注册全局方法
  commonStore.globalRegister(store, props)

  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}