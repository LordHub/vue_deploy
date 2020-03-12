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
        <card class="col-md-6" title="Timeline"></card>
        <vue-instagram :token="token" :count="9">
          <template v-slot="{ posts, errorMsg, fetchMorePosts }">
            <section>
              <div>
                <article v-for="post in posts" :key="post.id">
                  <a :href="post.link" target="_blank" rel="noopener">
                    <img :src="post.images.low_resolution.url" alt="instagram" />
                  </a>
                  <h2 v-if="post.caption">{{ post.caption.text }}</h2>
                  <ul class="tags-list">
<!--                    <li v-for="tag in post.tags">#{{ tag }}</li>-->
                    <li>#</li>
                  </ul>
                </article>
                <pre v-if="errorMsg">{{ errorMsg }}</pre>
              </div>
              <div class="text-center">
                <button
                  class="text-xl border-b-4 border-primary leading-none"
                  @click="fetchMorePosts"
                >
                  More
                </button>
              </div>
            </section>
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
    import VueInstagram from 'vue-instagram-feed'

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
