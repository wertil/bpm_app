<template>
  <div class="switch">
    <vs-switch dark square v-model="darkMode">
      <template #circle>
        <i v-if="!darkMode" class='bx bxs-moon'></i>
        <i v-else class='bx bxs-sun'></i>
      </template>
    </vs-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'Bright Mode',
      darkMode: false,
    }
  },
  computed: {
    getMode() {
      if (this.darkMode) {
        return 'Dark Mode';
      } else {
        return 'Bright Mode';
      }
    }
  },
  watch: {
    darkMode: {
      handler() {
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
        if (this.darkMode) {
          document.body.classList.add('bpm--dark-mode');
        } else {
          document.body.classList.remove('bpm--dark-mode');
        }
      },
      deep: true,
    }
  },
  mounted() {
    if (localStorage.getItem('darkMode')) this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
  }

}
</script>

<style scoped>
  .switch {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 5rem;
    padding: 0.5em;
  }
</style>
