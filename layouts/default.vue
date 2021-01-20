<template>
    <v-app>

        <Navigation/>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
        >
          <v-container>
            <Nuxt/>

          </v-container>
        </v-sheet>
      <ModeSwitch></ModeSwitch>
    </v-app>
</template>

<style lang="scss">
@import "assets/scss/theme";
@import "assets/scss/styles";
</style>
<script>
import Navigation from "~/components/Navigation";

export default {
  components: {Navigation}
}
</script>
