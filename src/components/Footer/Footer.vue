<template>
    <footer class="footer" :class="themeKey">
        <div class="container">
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        computed: {
            themeKey: function () {
                return this.$store.getters.getThemeKey;
            }
        }
    }
</script>

<style lang="scss">
  @import '_Footer.scss';
</style>