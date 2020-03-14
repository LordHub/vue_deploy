<template>
    <div class="Profile">
      <div class="info">
        <profile-image :circle=true size="large"></profile-image>
        <div class="description">
          <h2>Andrés Paúl Muñoz</h2>
          <h3>Who am I?</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
        </div>
      </div>
      <div class="content">
        <card class="col-md-6" title="Timeline" button-text="Timeline" go-to="/timeline"></card>
        <git-hub-repos></git-hub-repos>
      </div>
      <contact-me></contact-me>
    </div>
</template>

<script>
    import ProfileImage from "../ProfileImage/ProfileImage";
    import ContactMe from "../ContactMe/ContactMe";
    import Card from "../Card/Card";
    import VueInstagram from 'vue-instagram'
    import GitHubRepos from "../GitHubRepos/GitHubRepos";

    export default {
      components: {GitHubRepos, Card, ContactMe, ProfileImage, VueInstagram},
      props: {
        },
      data: function() {
        return {
        token: "",
      };
},
    };
</script>
<style lang="scss">
  @import '_Profile.scss';
</style>
