<template>
    <v-container>
        <v-row class="main-content">
            <slot></slot>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ContentWrapper"
}
</script>

<style >
    .main-content {
        padding: 1rem;
    }
</style>
