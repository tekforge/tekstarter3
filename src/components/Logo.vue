<template>
  <div class="logo" :style="`width: ${w}px;height: ${h}px;`">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    w: {
      type: Number,
      default: 368
    },
    h: {
      type: Number,
      default: 115
    },
  },
}
</script>

<style scoped>
.logo {
  background-image: url('../assets/logo.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>