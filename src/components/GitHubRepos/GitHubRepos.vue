<template>
    <div class="Card col-md-6 githubrepos">
        <b-card bg-variant="dark" text-variant="white" :title=title>
            <div v-for="respository in repositories.slice(0, 5)" :key="respository.id" class="repositories">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" >
                {{ respository.name }}
            </div>
            <b-card-text>
                With supporting text below as a natural lead-in to additional content.
            </b-card-text>
            <b-button :to=goTo variant="primary">Go to {{buttonText}}</b-button>
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
        }
    }
</script>

<style lang="scss">
    @import '_GitHubRepos.scss';
</style>