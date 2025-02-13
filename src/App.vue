<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, user, isAuthenticated } = useAuth0()
const { logout } = useAuth0()

const login = () => {
  loginWithRedirect()
}

const handleLogout = () => {
  logout({
    logoutParams: { returnTo: window.location.origin },
  })
}
</script>

<template>
  <div v-if="!isAuthenticated">
    <button @click="login">Log in</button>
  </div>
  <div v-if="isAuthenticated">
    <button @click="handleLogout">Log out</button>
    <p>{{ user?.email }}</p>
  </div>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
