<template>
  <div class="home">
    <div>
      <router-link to="/">
       <Logo />
      </router-link>
      <h1>Web Template</h1>
    
      <div class="flex absolute right-14 top-10">
        <router-link to="login">
          <button class="bg-blue-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">Login</button>
        </router-link>
        <router-link to="signup" class="mt-4 ml-3">Signup</router-link>
      </div>
    </div>
    <router-view />
  </div>  
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  name: 'Home',
  components: {
    Logo,
  },
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.banner {
  height: 600px;
}
</style>