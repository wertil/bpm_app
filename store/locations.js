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
    fetchEvents({commit, dispatch, getters} ) {
        return EventService.getEvents()
            .then(({data}) => {
                commit('SET_EVENTS', data)
                let countries = getters.getCountries
                if(!countries.length) {
                    data.forEach(country => {
                        dispatch('fetchRestCountry', country.title)
                    })
                }
            })
    },
    fetchEvent({commit}, id) {
        return EventService.getEvent(id)
            .then(response => {
                commit('SET_EVENT', response.data)
            })
    },
    fetchRestCountry({commit}, name) {
        return RestCountries.getCountryByName(name)
            .then(response => {
                commit('SET_REST_COUNTRY', response.data)
            })
    }
}

export const getters = {
    //TODO TypeError: this.getCountryByName2 is not a function (_id.vue)
    getCountryByName2: state => {
       return  name => state.restCountries.find(c => c.name === name)
    },
    getCountries: state => state.restCountries
}
