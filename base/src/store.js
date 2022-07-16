/*
 * @Author: Mx
 * @Date: 2022-07-16 20:30:05
 * @Description: 
 */
import { initGlobalState } from "qiankun";
import Vue from 'vue'

// 主应用数据state
const initialState = Vue.observable({
    user: {
        name: 'zhangsan'
    }
})

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
   console.log('主应用数据变化', JSON.stringify(state), JSON.stringify(prev))
});

// 定义一个获取state的方法下发子应用
actions.getGlobalState = (key) => {
    // 有key，表示取globalState下的某个子级对象
    // 无key，表示取全部
  return key ? initialState[key] : initialState
}
export default actions