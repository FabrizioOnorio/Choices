<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0()

const login = () => {
  loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin + '/dashboard',
    },
  })
}

const handleLogout = () => {
  logout({
    logoutParams: { returnTo: window.location.origin },
  })
}
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>

  <div v-else>
    <div v-if="isAuthenticated" class="mt-4 w-full flex justify-end">
      <v-btn variant="text" prependIcon="mdi-logout" @click="handleLogout">Log out</v-btn>
    </div>
    <v-app>
      <RouterView :login="login" :handleLogout="handleLogout" :isAuthenticated="isAuthenticated" />
    </v-app>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
