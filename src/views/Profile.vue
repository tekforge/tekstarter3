<template>
  <div class="p-5">
    <p>{{user.firstname}} {{user.lastname}}</p>
    <p><em>user profile and password reset</em></p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.state.user
    }
  },
}
</script>