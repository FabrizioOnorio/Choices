<script setup lang="ts">
interface AuthProps {
  login: () => void
  handleLogout: () => void
  isAuthenticated: boolean
}
const props = defineProps<AuthProps>()

</script>

<template>
  <div class="h-full flex flex-col justify-between items-center">
    <p class="">dashboard</p>
    <button v-if="props.isAuthenticated" @click="props.handleLogout">Log out</button>
  </div>
</template>
