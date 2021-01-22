<template>

  <div>
    <Logo/>


    <v-card>
      <v-card-title>
        Photos
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="togglePassword"
          />
        </v-form>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer />
        <v-btn color="info">Login</v-btn>
      </v-card-actions>

    </v-card>

  </div>

</template>

<script>
export default {
  // Vue Meta
  head() {
    return {
      title: 'Photos',
    }
  },
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  }

}
</script>

<style>

</style>
