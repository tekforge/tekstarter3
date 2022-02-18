<template>
  <div class="layout w-screen h-screen">
    <navigation />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: { 
    Navigation 
  },
  name: 'Layout'
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
}

.content {
  overflow: hidden;
}
</style>
