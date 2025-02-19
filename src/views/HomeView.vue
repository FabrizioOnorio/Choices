<script setup lang="ts">
import FirstOnboarding from '@/components/FirstOnboarding.vue'
import SecondOnboarding from '@/components/SecondOnboarding.vue'
import ThirdOnboarding from '@/components/ThirdOnboarding.vue'
import FourthOnboarding from '@/components/FourthOnboarding.vue'
import { ref } from 'vue'

interface AuthProps {
  login: () => void
  handleLogout: () => void
  isAuthenticated: boolean
}

const props = defineProps<AuthProps>()

const currentTab = ref(1)

const handleNext = () => {
  if (currentTab.value > 3) {
    return
  }
  currentTab.value += 1
}

const handlePrevious = () => {
  if (currentTab.value < 2) {
    return
  }
  currentTab.value -= 1
}
</script>

<template>
  <div class="h-full flex flex-col justify-between items-center">
    <div class="flex w-full">
      <v-btn icon="mdi-arrow-left" size="small" variant="text" color="red" class="mt-4 ml-4" v-if="currentTab !== 1" @click="handlePrevious"
        >
        </v-btn
      >

    </div>
    <div v-if="currentTab === 1">
      <FirstOnboarding :props="props" />
    </div>
    <div v-else-if="currentTab === 2">
      <SecondOnboarding :props="props" />
    </div>
    <div v-else-if="currentTab === 3">
      <ThirdOnboarding :props="props" />
    </div>
    <div v-else-if="currentTab === 4">
      <FourthOnboarding :props="props" />
    </div>

    <div class="mb-10 items-center">
      <div class="flex gap-2 mb-4">
        <v-btn class="w-full" size="large" color="red" variant="tonal" v-if="currentTab !== 4" @click="handleNext">Next</v-btn>
        <v-btn class="w-fit" size="large" color="red" variant="tonal" v-if="!props.isAuthenticated && currentTab === 4" @click="props.login">
          Skip to Log in/Create account
        </v-btn>
      </div>

      <div class="itm-center">
        <button v-if="!props.isAuthenticated && currentTab !== 4" @click="props.login">
          Skip to Log in/Sign up
        </button>

      </div>
    </div>
  </div>
</template>
