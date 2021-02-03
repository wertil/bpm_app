<template>
    <v-footer
        padless
        class="page-footer"
    >
                <v-btn
                    v-for="link in links" :key="link.label"
                    text rounded class="my-2"
                    :to="link.url">

                    {{ link.label }}
                </v-btn>
        <v-container>
            <v-row align="center">
                <ModeSwitch col="6"/>
                <v-col
                    class="py-4 text-center"
                    cols="6"
                >
                    {{ new Date().getFullYear() }} — <strong>Backpacking Asia</strong>
                </v-col>
            </v-row>
        </v-container>



    </v-footer>
</template>

<script>
import ModeSwitch from "./ModeSwitch";
import {mapState} from 'vuex'

export default {
    components: {ModeSwitch},
    computed: {
        ...mapState({
            links: state => state.navigation.main
        })
    }
}
</script>

<style>
    .page-footer {
        justify-content: center;
        position: relative;

        .switch {
            position: absolute;
            left: 2rem;
        }
    }
</style>
