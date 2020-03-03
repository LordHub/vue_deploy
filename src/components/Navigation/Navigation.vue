<template>
  <div class="navigation">
    <h2>Nav Bar</h2>
    <nav>
      <router-link to="/home">Home</router-link>
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
  /*@import './scss/_variables.scss';*/
  .navigation {
    background-color: $color-primary-0;
  }
</style>
