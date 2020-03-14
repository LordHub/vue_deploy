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
          <vue-instagram :token="token" :count="5" :tags="['redminote9pro']" mediaType="image">
              <template v-slot:loading="props">
                  <h1 v-if="props.loading" class="fancy-loading">Loading, please wait...</h1>
              </template>
              <template v-slot:feeds="props">
                  <li class="fancy-list"> {{ props.feed.link }} </li>
              </template>
              <template v-slot:error="props">
                  <div class="fancy-alert"> {{ props.error.error_message }} </div>
              </template>
          </vue-instagram>
      </div>
      <contact-me></contact-me>
    </div>
</template>

<script>
    import ProfileImage from "../ProfileImage/ProfileImage";
    import ContactMe from "../ContactMe/ContactMe";
    import Card from "../Card/Card";
    import VueInstagram from 'vue-instagram'

    export default {
      components: {Card, ContactMe, ProfileImage, VueInstagram},
      props: {
        },
      data: function() {
        return {
        token: ""
      };
},
    };
</script>
<style lang="scss">
  @import '_Profile.scss';
</style>
