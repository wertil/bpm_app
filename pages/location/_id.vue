<template>
    <div>
        <h1>{{ location.title }}</h1>
        <p> {{ country.capital }} </p>
        <p> {{ country }} </p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    name: "Location",
    // Vue Meta
    head() {
        return {
            title: 'Location #' + this.location.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Cool things to know about Location #' + this.location.title
                }
            ]
        }
    },
    async fetch({store, error, params}) {
        try {
            await store.dispatch('locations/fetchEvent', params.id);
        } catch (e) {
            error({statusCode: 503, message: 'Unable to fetch location +' + params.id + '. Plz try again.'})
        }
    },
    computed: {
        ...mapState({
            location: state => state.locations.location
        }),
        ...mapGetters([
            'locations/getCountryByName2'
        ]),
        country(){
            return this.$store.state.locations.restCountries.find(c => c.name === this.location.title)
        }
    },
    mounted() {
        //TODO TypeError: this.getCountryByName2 is not a function
        // console.log("huhu", this.getCountryByName2('Malaysia'));
    }

}
</script>


<style scoped>

</style>
