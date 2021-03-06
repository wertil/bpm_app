<template>
    <ContentWrapper>
        <v-container>
            <h1>Dashboard</h1>

            <v-card class="mb-5 pa-3">
                <h2>Counter: {{ counter }}</h2>
                <v-card-actions>
                    <v-btn @click="countUp">+</v-btn>
                    <v-btn @click="countDown">-</v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="mb-5 pa-3">
                <h2>Employees</h2>
                <ul>
                    <li v-for="employee in salesEmployees" :key="employee.id">
                        {{ employee.name }} ({{ employee.title }})
                    </li>
                </ul>
            </v-card>

            <v-row>
                <v-col cols="12" sm="6" md="4" v-for="sale in sales" :key="`${sale.title}`">
                    <SalesGraph :sale="sale"/>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6" md="3" v-for="statistic in statistics"
                       :key="`${statistic.title}`">
                    <StatisticCard

                        :statistic="statistic"
                    />
                </v-col>
            </v-row>

            <v-row class="below-the-fold">
                <v-col cols="12" md="8">
                    <EmployeesTable :employees="employees" @select-employee="setEmployee"/>
                </v-col>
                <v-col cols="12" md="4">
                    <EventTimeline :timeline="timeline"/>
                </v-col>
            </v-row>

            <div v-intersect="showMoreContent"></div>

            <v-skeleton-loader
                type="card-avatar, article, actions"
                class="mt-4"
                v-if="loadNewContent"

            />


            <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndDown">
                You have selected {{ selectedEmployee.name }},
                {{ selectedEmployee.title }}
                <v-btn color="pink" text @click="snackbar = false">
                    Close
                </v-btn>
            </v-snackbar>


        </v-container>
    </ContentWrapper>

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
            timeline: timelineData,
            loadNewContent: false,
            counter: 0
        }
    },
    computed: {
        salesEmployees(){
            return this.employees.filter( emp => emp.title.startsWith("Sales"))
        }
    },
    methods: {
        countUp() {
            this.counter++
        },
        countDown() {
            this.counter > 0 && this.counter--
        },
        setEmployee(event) {
            this.snackbar = true
            this.selectedEmployee.name = event.name
            this.selectedEmployee.title = event.title
        },
        showMoreContent(entries) {
            if (entries[0].isIntersecting)
                this.loadNewContent = entries[0].isIntersecting
        }
    }
}
</script>
