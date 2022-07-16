<!--
 * @Author: Mx
 * @Date: 2022-07-01 23:25:47
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <p>
        当前处于<span style="color: red">{{ isInQiankun ? "qiankun" : "独立运行" }}</span
        >环境
      </p>
      <p>
        vuex的`global module`的user state：<code> {{ JSON.stringify(user) }}</code>
      </p>
    </div>

    <button @click="changeUsername">改变全局信息</button>
    <button @click="openSubVue">独立打开sub-vue子应用</button>

    <router-view />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    // 通过global获取user的信息
    ...mapState("global", {
      user: (state) => state.user,
    }),
    isInQiankun() {
      return window.__POWERED_BY_QIANKUN__;
    },
  },
  methods: {
    // setGlobalState 是在 base/common/global-register.js中定义的
    ...mapActions("global", ["setGlobalState"]),
    /**
     * 改变全局信息
     */
    changeUsername() {
      this.setGlobalState({
        user: { name: "李四" + Math.round(Math.random() * 100) },
      });
    },
    /**
     * 独立打开sub-vue
     */
    openSubVue() {
      if (!this.isInQiankun) {
        alert("当前已经是单独运行的子应用");
        return;
      }
      // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
      window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
