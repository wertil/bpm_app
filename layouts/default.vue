<template>
  <v-app>
    <Navigation/>

    <v-content>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-content>

    <Footer />

  </v-app>
</template>

<style lang="scss">
@import "assets/scss/theme";
@import "assets/scss/styles";
</style>
<script>
import Navigation from "~/components/Navigation";
import Footer from "../components/Footer";

export default {
  // Vue Meta (Meta Information)
  // metaInfo = head() with Nuxt
  head() {
    return {
      titleTemplate: '%s - Backpacking Asia',
    }
  },
  components: {Footer, Navigation}
}
</script>
