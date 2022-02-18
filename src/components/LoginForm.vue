<template>
  <div v-if="!forgot">
    <h1 class="font-medium">Login</h1>
    <div class="w-80">
      <form @submit.prevent="Login()" >
        <div class="my-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input v-model="email" type="email" id="email" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-full outline-none" placeholder="you@email.com">
          </div>
        </div>
        <div class="my-3">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input v-model="password" type="password" id="password" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-full outline-none">
          </div>
        </div>
        <button type="submit" class="bg-blue-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-700 focus:outline-none focus:ring shadow-md hover:shadow-none transition-all duration-300 my-2">Login</button>
        <div @click="forgot = true;" class="text-blue-400 text-sm pl-2 mb-2 cursor-pointer">
          Reset password?
        </div>
        <auth-errors :error="error" />
      </form>
    </div>
  </div>
  <div v-else>
    <h1 class="font-medium">Reset Password</h1>
    <form @submit.prevent="Reset()">
      <div class="my-3">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <div class="mt-1">
          <input v-model="email" type="email" id="email" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-full outline-none">
        </div>
      </div>
      <button type="submit" class="bg-blue-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-700 focus:outline-none focus:ring shadow-md hover:shadow-none transition-all duration-300 my-2">Reset</button>
      <p v-if="sent" class="text-blue-500">Reset email has been sent.</p>
      <div @click="forgot = false;" class="text-blue-400 text-sm pl-2 mb-2 cursor-pointer">
        Back to login
      </div>
      <auth-errors :error="error" />
    </form>
  </div>
</template>

<script>
import AuthErrors from './AuthErrors.vue'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";
const auth = getAuth();

export default {
  name: 'LoginForm',
  components: {
    AuthErrors,
  },
  data() {
    return {
      email: null,
      password: null,
      error: null,
      forgot: false,
      sent: false,
    }
  },
  methods: {
    Login() {
      signInWithEmailAndPassword (auth, this.email, this.password)
      .then(() => {
        this.$router.push('/dashboard')
      })
      .catch((error) => {
        this.error = error
      });
    },
    Reset() {
      sendPasswordResetEmail (auth, this.email )
      .then(() => {
        this.sent = true;
      })
      .catch((error) => {
        this.error = error
      });
    }
  },
}
</script>

<style scoped>
input {
  padding: 12px;
  border: 1px solid #eee;
}

input:focus {
  border: 2px solid #2563eb;
  padding: 11px;
}
</style>