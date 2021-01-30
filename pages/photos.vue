<template>
    <ContentWrapper>
        <Login/>
    </ContentWrapper>
</template>

<script>
import Login from "../components/vuetify-tutorial/Login";
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
