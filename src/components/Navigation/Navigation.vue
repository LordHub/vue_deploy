<template>
  <div class="navigation">
    <h1>LorHub</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
<style lang="scss">
  @import '_Navigation.scss';
</style>
