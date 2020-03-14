<template>
    <card title="Github"></card>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "GitHubRepos",
        data: function() {
            return {
                repositories: [],
            }
        },
        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response))
        }
    }
</script>

<style scoped>

</style>