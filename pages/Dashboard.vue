<template>
    <div>
        <h1>Dashboard</h1>

        <v-row>
            <v-col v-for="sale in sales" :key="`${sale.title}`">
                <SalesGraph :sale="sale"/>
            </v-col>
        </v-row>


        <v-row>
            <v-col v-for="statistic in statistics"
                   :key="`${statistic.title}`">
                <StatisticCard

                    :statistic="statistic"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="8">
                <EmployeesTable :employees="employees" @select-employee="setEmployee"/>
            </v-col>
            <v-col cols="4">
                <EventTimeline :timeline="timeline"/>
            </v-col>
        </v-row>


        <v-snackbar v-model="snackbar">
            You have selected {{ selectedEmployee.name }},
            {{ selectedEmployee.title }}
            <v-btn color="pink" text @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import EmployeesTable from '../components/vuetify-tutorial/EmployeesTable'
import EventTimeline from '../components/vuetify-tutorial/EventTimeline'
import SalesGraph from '../components/vuetify-tutorial/SalesGraph'
import StatisticCard from '../components/vuetify-tutorial/StatisticCard'
import employeesData from '../data/employees.json'
import timelineData from '../data/timeline.json'
import salesData from '../data/sales.json'
import statisticsData from '../data/statistics.json'

export default {
    name: 'DashboardPage',
    components: {
        EmployeesTable,
        EventTimeline,
        SalesGraph,
        StatisticCard
    },
    data() {
        return {
            employees: employeesData,
            sales: salesData,
            selectedEmployee: {
                name: '',
                title: ''
            },
            snackbar: false,
            statistics: statisticsData,
            timeline: timelineData
        }
    },
    methods: {
        setEmployee(event) {
            this.snackbar = true
            this.selectedEmployee.name = event.name
            this.selectedEmployee.title = event.title
        }
    }
}
</script>