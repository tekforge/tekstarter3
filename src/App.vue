<template>
  <div :class="(theme == 'dark')?'dark':'light'">
    <div class="overflow-hidden w-screen h-screen text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    theme() {
      return this.$store.state.theme
    }
  },  
}
</script>
