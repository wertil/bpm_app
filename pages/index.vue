<template>

    <div>
      <Logo />
      <h1 class="title">
        BPM
      </h1>
      <div class="links">
        <a
          href="/photos"
          rel="noopener noreferrer"
          class="button--green"
        >
          Photos
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>

</template>

<script>
import Logo from '~/components/Logo';
export default {
  components: {Logo},
  // Vue Meta
  head() {
    return {
      title: 'Home',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
        {
          hid: 'home',
          name: 'home',
          content: 'cool shit'
        }
      ]
    }
  }
}
</script>

<style>

</style>
