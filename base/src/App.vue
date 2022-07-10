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
    <div id="subapp-viewport"></div>
  </div>
</template>

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
