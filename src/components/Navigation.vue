<template>
  <div class="shadow-md flex justify-between">
    <div class="flex">
      <Logo w="100" class="mx-5"/>
      <ul class="flex mt-3">
        <li class="mr-4" :class="{'text-blue-400':$route.name == 'Dashboard'}">
          <router-link to="/dashboard">
            Dashboard
          </router-link>
        </li>
        <li class="mr-4" :class="{'text-blue-400':$route.name == 'Profile'}">
          <router-link to="/profile">
            Profile
          </router-link>
        </li>
      </ul>
    </div>
    <div class="flex">
      <ThemeSwitcher class="mr-8"/>
      <div class="cursor-pointer mt-3 mr-20" @click="Logout()">Logout</div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

export default {
  name: 'Navigation',
  components: {
    Logo,
    ThemeSwitcher,
  },
  methods: {
    Logout() {
      console.log('Log me out!')
      signOut(auth).then(() => {
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      });
    }
  },
}
</script>
