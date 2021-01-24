<template>

        <v-card :to="'/location/' + location.id">
            <v-card-title>
                {{ location.title }}
            </v-card-title>
            <v-card-text>
                <p>{{ parsedDate }}</p>
                {{ location.description }}
            </v-card-text>

        </v-card>

</template>

<script>
export default {
  name: "LocationsCard",
  props: {
    location: Object
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.location.date);
      return eventDate.toDateString();
    }
  }
}
</script>

<style scoped>

</style>
