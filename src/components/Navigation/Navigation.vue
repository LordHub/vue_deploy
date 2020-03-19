<template>
  <b-navbar :type="themeKey" :variant="themeKey" class="navigation">
    <b-navbar-nav>
      <profile-image circle="true" size="small"></profile-image>
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
        }
      },
      data() {
        return {
          themeImage: require('@/assets/idea.png'),
          themeKey: 'primary'
        }
      },
      watch: {
        // whenever question changes, this function will run
        theme: function () {
          this.themeKey  = this.theme ? 'primary' : 'dark';
          this.themeImage = this.theme ? require('@/assets/idea.png') : require('@/assets/lightbulb.png');
          console.log('watch', this.theme)
        }
      },
      methods: {
          toggleTheme: function () {
            // this.theme = !this.theme;
            this.$store.commit('toggleTheme')
            // console.log(this.theme);
          }
      }
    };
</script>
<style lang="scss">
  @import '_Navigation.scss';
</style>
