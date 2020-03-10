<template>
    <div class="Profile">
      <div class="row info">
        <profile-image :circle="true" size="large"></profile-image>
        <ul>
          <li>test </li>
          <li>test 2</li>
          <li>test 3</li>
          <li>test 4</li>
          <li>test 5</li>
        </ul>
      </div>
      <contact-me></contact-me>
    </div>
</template>

<script>
    import ProfileImage from "../ProfileImage/ProfileImage";
    import ContactMe from "../ContactMe/ContactMe";
    export default {
      components: {ContactMe, ProfileImage},
      props: {
        },
    };
</script>
<style lang="scss">
  @import '_Profile.scss';
</style>
