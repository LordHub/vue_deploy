<template>
    <div class="Card">
      <b-card bg-variant="dark" text-variant="white" :title=title>
        <b-card-text>
          With supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-button :to=goTo variant="primary">Go to {{buttonText}}</b-button>
      </b-card>
    </div>
</template>

<script>
    export default {
        props: {
          title: String,
          subtitle: String,
          goTo: String,
          buttonText: String
        },
    };
</script>
