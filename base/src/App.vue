<!--
 * @Author: Mx
 * @Date: 2022-06-28 19:32:43
 * @Description: 
-->
<template>
  <div class="layout-wrapper">
    <div id="nav">
      <router-link to="/sub-vue">sub-vue</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
