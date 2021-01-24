<template>
  <div>
    <h1>{{   location.title }}</h1>
  </div>
</template>

<script>
export default {
  // Vue Meta
  head() {
    return {
      title: 'Location #' + this.location.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
        {
          hid: 'description',
          name: 'description',
          content: 'Cool things to know about Location #' + this.location.title
        }
      ]
    }
  },
    async asyncData({$axios, error, params}) {
        try {
            const {data} = await $axios.get('http://localhost:8000/locations/' + params.id);
            return {
                location: data // merges with component data
            }
        } catch (e) {
            error({statusCode: 503, message: 'Unable to fetch location +' + params.id + '. Plz try again.'})
        }
    }
}
</script>


<style scoped>

</style>
