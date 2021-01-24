<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <ModeSwitch/>

      <v-btn
        v-for="link in links" :key="link.label"
        text rounded class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Backpacking Asia</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import ModeSwitch from "./ModeSwitch";

export default {
  components: {ModeSwitch},
  data() {
    return {
      links: [
        {label: 'Home', url: '/'},
        {label: 'Photos', url: '/photos'},
        {label: 'Location', url: '/location'},
        {label: 'Dashboard', url: '/dashboard'}
        ]
    }
  }
}
</script>

<style scoped>

</style>
