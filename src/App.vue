<template>
  <div id="app">
    <div id="nav"> |
      <router-link exact to="/">In-Route</router-link> |
      <router-link to="/in-component">In-Component</router-link> |
      <router-link to="/vuex-approach">With Vuex</router-link> |
      <router-link to="/provider-pattern">Provider Pattern</router-link> |
      <router-link to="/local-storage-provider-pattern">Local Storage Provider Pattern</router-link> |
      <router-link to="/renderless-provider-pattern">Renderless Provider Pattern</router-link> |
      <router-link to="/extending-provider-pattern">Extending Providers</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
a {
  color: #808080;
}

.link-active {
  color: blue;
}

.link-exact-active {
  color: blue;
}
</style>
