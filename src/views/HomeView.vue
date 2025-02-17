<script setup lang="ts">
import FirstOnboarding from '@/components/FirstOnboarding.vue';
import SecondOnboarding from '@/components/SecondOnboarding.vue';
import ThirdOnboarding from '@/components/ThirdOnboarding.vue';
import FourthOnboarding from '@/components/FourthOnboarding.vue';
import { ref } from 'vue';

interface AuthProps {
  login: () => void
  handleLogout: () => void
  isAuthenticated: boolean
}

const props = defineProps<AuthProps>()

const tabs = [
  {
    id: 1,
    component: FirstOnboarding,
  },
  {
    id: 2,
    component: SecondOnboarding,
  },
  {
    id: 3,
    component: ThirdOnboarding,
  },
  {
    id: 4,
    component: FourthOnboarding,
  }
]

const currentTab = ref(1)

const handleNext = () => {
  if (currentTab.value === 4) {
    return
  }
  currentTab.value += 1
}

const handlePrevious = () => {
  if (currentTab.value === 1) {
    return
  }
  currentTab.value -= 1
}

</script>

<template>
  <div class="h-full flex flex-col justify-between items-center">
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

    <button v-if="currentTab !== 1" @click="handlePrevious">Previous</button>
    <button v-if="currentTab !== 4" @click="handleNext">Next</button>

    
    <button v-if="!props.isAuthenticated && currentTab ===4" @click="props.login">Skip to Log in/Create account</button>
    <button v-if="!props.isAuthenticated && currentTab !==4" @click="props.login">Skip to Log in/Sign up</button>
  </div>
</template>


