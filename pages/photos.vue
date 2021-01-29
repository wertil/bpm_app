<template>

  <v-container>
      <v-row>
          <Login/>
      </v-row>
  </v-container>

</template>

<script>
import Login from "../components/Login";
export default {
  components: {Login},
  // Vue Meta
  head() {
    return {
      title: 'Photos',
    }
  }

}
</script>

<style>

</style>
