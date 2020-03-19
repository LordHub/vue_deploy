<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <spring-spinner v-if="isLoading"
      :animation-duration="4000"
      :size="50"
      color="#ff1d5e"
      class="loading-spinner"
    ></spring-spinner>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation/Navigation";
  import Footer from "./components/Footer/Footer"
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import Vue from "vue"
  import SpringSpinner from "epic-spinners/src/components/lib/SpringSpinner";

  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {SpringSpinner, Navigation, Footer},
  computed: {
    isLoading: function () {
      return this.$store.getters.isLoading
    }
  }
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
.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-2rem, -2rem);
  z-index: 9999;
  transition: opacity 0.3s ease-in-out;
}
</style>
