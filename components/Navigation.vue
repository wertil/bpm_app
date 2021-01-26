<template>

    <v-app-bar app collapse-on-scroll fixed dark>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Backpacking Asia</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
            <v-tabs>
                <v-tab align-with-title
                       v-for="link in links" :key="link.label" :to="link.url">
                    {{ link.label }}
                </v-tab>
            </v-tabs>
        </template>

    </v-app-bar>

</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "Navigation",
    computed: {
        ...mapState({
            links: state => state.navigation.main
        })
    }
}
</script>

<style scoped>

</style>
