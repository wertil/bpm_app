<template>
    <div class="switch mr-3 mt-0">
        <v-switch label="Dark Mode" v-model="darkMode"></v-switch>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false
        }
    },
    watch: {
        darkMode: {
            handler() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
                localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
                if (this.darkMode) {
                    this.$vuetify.theme.dark = true;
                } else {
                    this.$vuetify.theme.dark = false;
                }
            }
        }
    },
    beforeMount() {
        if (localStorage.getItem('darkMode')) this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
    }

}
</script>

<style scoped>

</style>
