<template>

    <div>
        <Logo/>
        <v-row>
            <v-col cols="6" v-for="(location, index) in locations" :key="index">
                <LocationsCard
                    :location="location" :data-index="index"
                    class="mb-3"
                />
            </v-col>
        </v-row>

    </div>

</template>

<script>
import Logo from '~/components/Logo';
import LocationsCard from "../components/LocationsCard";
import {mapState} from 'vuex'

export default {
    // Vue Meta
    head() {
        return {
            title: 'Home',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
                {
                    hid: 'home',
                    name: 'home',
                    content: 'cool shit'
                }
            ]
        }
    },
    components: {LocationsCard, Logo},
    // Store Action to fetch location data
    // fetch is a nuxt lifecycle hook: https://nuxtjs.org/blog/understanding-how-fetch-works-in-nuxt-2-12/
    async fetch({store, error}) {
        try {
            await store.dispatch('locations/fetchLocations')
            await store.dispatch('locations/fetchRestCountries')
        } catch (e) {
            error({statusCode: 503, message: 'Unable to fetch locations at this time. Plz try again.'})
        }
    },
    computed:
        mapState({
            locations: state => state.locations.locations
        })

}
</script>

<style>

</style>
