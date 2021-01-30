<template>
    <v-col>
        <h1>Signup</h1>
        <v-form ref="signUpForm" v-model="formValidity">
            <v-text-field :rules="nameRules" label="Name" type="text"/>
            <v-text-field :rules="emailRules" v-model="email" label="Email" type="email" prepend-icon="mdi-email"/>
            <v-autocomplete :items="browsers" label="What browser do you use?"/>
            <v-text-field label="Birthday" v-model="birthday" readonly/>
            <v-date-picker
                v-model="birthday"
            />
            <v-file-input label="attach profile picture"/>
            <v-text-field
                label="Username"
                prepend-icon="mdi-account-circle"/>
            <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="togglePassword"
            />
            <v-checkbox label="Agree to Terms & Conditions"
                        :rules="agreeToTermsRules" required/>
            <v-switch label="Agree to some other stuff"/>
            <v-btn type="submit" color="primary" class="mr-4" :disabled="!formValidity">Submit</v-btn>
            <v-btn color="success" @click="validateForm">Validate Form</v-btn>
            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
            <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
    </v-col>

</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            formValidity: false,
            showPassword: false,
            birthday: null,
            browsers: ["Chrome", "Brave", "Firefox", "Internet Explorer", "Safari", "Other"],
            agreeToTerms: false,
            agreeToTermsRules: [
                value => !!value || 'You must agree to the TOS.'
            ],
            email: '',
            // vuetify form rules
            emailRules: [
                value => !!value || 'Email is required',
                value => (value && value.indexOf('@') !== 0) || 'Email should have a username',
                value => (value && value.includes('@')) || 'Email should have an @ Symbol',
                v => (v && v.indexOf('.') - v.indexOf('@') > 1) || 'There should be a domain name.',
                v => (v && v.length - v.indexOf('.') > 2) || 'There should be a domain extension.'
            ],
            nameRules: [
                value => !!value || 'Plz enter a name.',
                value => (value && value.length > 1) || 'The name should have at least 2 characters.',
            ]
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        resetValidation() {
            // vuetify form functions: https://vuetifyjs.com/en/api/v-form/#functions
            this.$refs.signUpForm.resetValidation();
        },
        resetForm() {
            // vuetify form functions: https://vuetifyjs.com/en/api/v-form/#functions
            this.$refs.signUpForm.reset();
        },
        validateForm() {
            // vuetify form functions: https://vuetifyjs.com/en/api/v-form/#functions
            this.$refs.signUpForm.validate();
        }
    }
}
</script>

<style scoped>

</style>
