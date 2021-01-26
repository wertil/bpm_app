import axios from 'axios';

const apiClient = axios.create({
    method: 'get',
    baseURL: 'http://localhost:8000/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
    }
})

export default {
    getEvents() {
        return apiClient.get('/locations')
    },
    getEvent(id) {
        return apiClient.get('locations/' + id)
    }
}
