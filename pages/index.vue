<template>

    <div>
        <Logo/>
        <LocationsCard
            v-for="(location, index) in locations" :key="index" :location="location" :data-index="index"
            class="mb-3"
        />
    </div>

</template>

<script>
import Logo from '~/components/Logo';
import LocationsCard from "../components/LocationsCard";

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
    // asyncData is a Nuxt hook for universal data fetching
    // https://nuxtjs.org/docs/2.x/features/data-fetching/
    asyncData_syntax_with_then({$axios, error}) {
        return $axios.get('http://localhost:8000/locations')
            .then(response => {
                return {
                    locations: response.data // merges with component data
                }
            })
            .catch(e => {
                error({statusCode: 503, message: 'Unable to fetch locations at this time. Plz try again.'})
            })
    },
    async asyncData({$axios, error}) {
        try {
            const {data} = await $axios.get('http://localhost:8000/locations');
            return {
                locations: data // merges with component data
            }
        } catch (e) {
            error({statusCode: 503, message: 'Unable to fetch locations at this time. Plz try again.'})
        }
    }
}
</script>

<style>

</style>
