<template>
  <b-navbar :type="themeKey" :variant="themeKey" class="navigation">
    <b-navbar-nav>
      <profile-image :circle="true" size="small"></profile-image>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
      <img :src="themeImage" alt="theme" class="theme-toggle" @click="toggleTheme">
    </b-navbar-nav>
  </b-navbar>

</template>

<script>
    import ProfileImage from "../ProfileImage/ProfileImage";
    export default {
      components: {ProfileImage},
      computed: {
        theme: function () {
          return this.$store.getters.getThemeState
        },
        themeKey: function() {
          return this.$store.getters.getThemeKey
        }
      },
      data() {
        return {
          themeImage: require('@/assets/idea.png')
        }
      },
      watch: {
        theme: function () {
          this.themeImage = this.theme ? require('@/assets/idea.png') : require('@/assets/lightbulb.png');
        }
      },
      methods: {
          toggleTheme: function () {
            this.$store.commit('toggleTheme')
          }
      }
    };
</script>
<style lang="scss">
  @import '_Navigation.scss';
</style>
