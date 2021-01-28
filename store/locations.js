import EventService from "../services/EventService";
import RestCountries from "../services/RestCountries";

export const state = () => ({
    locations: [],
    location: {},
    restCountries: []
})

export const mutations = {
    SET_EVENTS(state, locations) {
        state.locations = locations
    },
    SET_EVENT(state, location) {
        state.location = location
    },
    SET_REST_COUNTRY(state, country) {
        state.restCountries.push(country[0])
    }
}

export const actions = {
    fetchLocations({commit, dispatch, getters} ) {
        return EventService.getEvents()
            .then(({data}) => {
                commit('SET_EVENTS', data)
            })
    },
    fetchEvent({commit}, id) {
        return EventService.getEvent(id)
            .then(response => {
                commit('SET_EVENT', response.data)
            })
    },
    fetchRestCountries({commit,dispatch,getters}) {
        let locations = getters.getLocations
        locations.forEach(location => {
            dispatch('fetchRestCountry', location.title)
        })
    },
    fetchRestCountry({commit}, name) {
        console.log({name})
        return RestCountries.getCountryByName(name)
            .then(response => {
                console.log({response})
                commit('SET_REST_COUNTRY', response.data)
            })
    }
}

export const getters = {
    //TODO TypeError: this.getCountryByName2 is not a function (_id.vue)
    getCountryByName2: state => {
       return  name => state.restCountries.find(c => c.name === name)
    },
    getLocations: state => state.locations,
    getCountries: state => state.restCountries
}
