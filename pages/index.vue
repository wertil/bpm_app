<template>
    <ContentWrapper>
        <Logo/>
        <Locations/>
    </ContentWrapper>
</template>

<script>
import Logo from '~/components/Logo';
import Locations from "../components/Locations";

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
    components: {Locations, Logo},
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


}
</script>

