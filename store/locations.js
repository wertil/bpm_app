import EventService from "../services/EventService";

export const state = () => ({
    locations: [],
    location: {}
})

export const mutations = {
    SET_EVENTS(state, locations) {
        state.locations = locations
    },
    SET_EVENT(state, location) {
        state.location = location
    }
}

export const actions = {
    fetchEvents({commit}) {
        return EventService.getEvents()
            .then(response => {
                commit('SET_EVENTS', response.data)
            })
    },
    fetchEvent({commit}, id) {
        return EventService.getEvent(id)
            .then(response => {
                commit('SET_EVENT', response.data)
            })
    }
}
