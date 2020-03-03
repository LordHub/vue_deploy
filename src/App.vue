<template>
  <div id="app">
    <Navigation></Navigation>
    <img src="./assets/logo.png">
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation/Navigation";
export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style lang="scss">
@import 'scss/_variables.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary-0;
  margin-top: 60px;
}

</style>
