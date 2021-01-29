<template>

    <v-card :to="'/location/' + location.id" class="country">
        <v-card-title>
            {{ location.title }}
        </v-card-title>
        <v-card-text v-if="countryData">
            <p><strong>Capital: </strong> {{ countryData.capital }}</p>
            <p><strong>Population: </strong> {{ population }}</p>
            <img class="flag" :src="countryData.flag">
        </v-card-text>

    </v-card>

</template>

<script>
export default {
    name: "LocationsCard",
    props: {
        location: Object
    },
    async fetch({store, error}) {
        try {
            await store.dispatch('locations/fetchRestCountries')
        } catch (e) {
            error({statusCode: 503, message: 'Unable to fetch locations at this time. Plz try again.'})
        }
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
.country {
    background: #f5f5f5;
}
.flag {
    height: 4rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
