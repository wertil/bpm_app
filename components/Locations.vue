<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" sm="6" md="4" lg="3"  v-for="(location, index) in locations" :key="index">
                <LocationsCard
                    :location="location" :data-index="index"
                    class="mb-3"
                />
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
import LocationsCard from "./LocationsCard"
import {mapState} from "vuex";

export default {
    name: 'Locations',
    components: {LocationsCard},
    computed:
        mapState({
            locations: state => state.locations.locations
        })
}
</script>
