<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation/Navigation";
  import Footer from "./components/Footer/Footer"
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import Vue from "vue"


  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {Navigation, Footer}
}
</script>

<style lang="scss">
@import 'scss/_variables.scss';
// custom.scss
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary-0;
}
body {
  margin: 0;
}
</style>
