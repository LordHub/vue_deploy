<template>
    <div class="ProfileImage">
        <pre v-text="$attrs"/>
      <img :src="lordHubImg" alt="Profile Image" :class="{round_image: circle}">
    </div>
</template>

<script>
export default {
  props: {
    circle: Boolean,
    url: {
      type: String,
    }
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
