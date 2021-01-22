<template>
  <div>
    <h1>Location #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  // Vue Meta
  head() {
    return {
      title: 'Location #' + this.id,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
        {
          hid: 'description',
          name: 'description',
          content: 'Cool things to know about Locatin #' + this.id
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

</script>

<style scoped>

</style>
