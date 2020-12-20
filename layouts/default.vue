<template>
  <div class="bpm-outer">
    <Navigation />
    <Nuxt />
    <ModeSwitch></ModeSwitch>
  </div>
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
