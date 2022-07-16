<!--
 * @Author: Mx
 * @Date: 2022-06-28 19:32:43
 * @Description: 
-->
<template>
  <div class="layout-wrapper">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/sub-vue">vue应用</el-menu-item>
      <el-menu-item index="/sub-react">react应用</el-menu-item>
    </el-menu>
    <div>主应用的state: {{ JSON.stringify(state) }}</div>
    <div id="subapp-viewport"></div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {};
  },
  computed: {
    state() {
      // 如果只需要取某个命名空间下的state，比如 user ，可以加上参数
      // return store.getGlobalState('user')

      // 返回所有的state则不需添加参数
      return store.getGlobalState();
    },
  },
};
</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
