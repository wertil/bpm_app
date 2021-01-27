<template>

    <v-card :to="'/location/' + location.id">
        <v-card-title>
            {{ location.title }}
        </v-card-title>
        <v-card-text>
            <p><strong>Capital: </strong> {{ countryData.capital }}</p>
            <p><strong>Population: </strong> {{ population }}</p>
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
        countryData() {
            return this.$store.state.locations.restCountries.find(c => c.name === this.location.title)
        },
        population() {
            return new Intl.NumberFormat('en-EN').format(this.countryData.population)
        }
    }
}
</script>

<style scoped>

</style>
