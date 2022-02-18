<template>
  <div class="text-red-600">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'AuthErrors',
  props: {
    error: {
      type: Object
    },
  },
  computed: {
    msg() {
      if (this.error) {
        console.log(this.error.code)
        switch (this.error.code) {
          case 'auth/user-not-found':
            return 'A user with that email does not exist.'
          
          case 'auth/wrong-password':
            return 'That email/password combination is not valid.'
          
          case 'auth/too-many-requests':
            return 'Too many attempts, please wait a while.'
        
          default:
            return 'An unknown error occurred.'
        }
      } else {
        return null
      }
    }
  },
}
</script>