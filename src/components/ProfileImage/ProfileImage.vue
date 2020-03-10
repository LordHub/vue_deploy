<template>
    <div class="ProfileImage">
      <img :src="lordHubImg" alt="Profile Image" :class="classObject">
    </div>
</template>

<script>
export default {
  props: {
    circle: Boolean,
    size: String,
    url: String,

  },
  computed: {
    classObject: function () {
      return {
        round_image: this.circle,
        [this.size]:this.size
      }
    },
  },
  data: function() {
      return {
        lordHubImg: 'https://avatars3.githubusercontent.com/u/18556428?s=460&v=4'
      };
  }
};
</script>
<style scoped>
  @import '_ProfileImage.scss';
</style>
