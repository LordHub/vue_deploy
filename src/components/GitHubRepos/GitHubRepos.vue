<template>
    <div class="Card col-md-6 githubrepos">
        <b-card :bg-variant="themeKey" :title=title>
            <div v-for="repository in repositories.slice(0, 5)" :key="repository.id" class="repositories col-md-6 col-xs-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" >
                <a :href="repository.svn_url" target="_blank">{{ repository.name }}</a>
            </div>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "GitHubRepos",
        data: function() {
            return {
                repositories: [],
                title: "GitHub Repos"
            }
        },
        mounted () {
            axios
                .get('https://api.github.com/users/LordHub/repos')
                .then((response) => {
                    console.log(response['data'])
                    this.repositories = response['data'];
                })
        },
        computed: {
            themeKey: function () {
                return this.$store.getters.getThemeKey;
            }
        }
    }
</script>

<style lang="scss">
    @import '_GitHubRepos.scss';
</style>