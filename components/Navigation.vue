<template>

  <v-app-bar app collapse-on-scroll fixed dark>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/photos"> Photos</v-tab>
        <v-tab to="/location/create">Add Location</v-tab>
      </v-tabs>
    </template>

  </v-app-bar>

</template>

<script>
export default {
name: "Navigation"
}
</script>

<style scoped>

</style>
