<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const currentTab = ref(1)
const surveyName = ref('')

const handlePrevious = () => {
  if (currentTab.value < 2) {
    router.push('/dashboard')
    return
  }
  currentTab.value -= 1
}

const handleNext = () => {
  console.log('Next')
}

const rules = [
  (v: string) => !!v || 'Survey Name is required',
]
</script>

<template>
  <v-btn
    icon="mdi-arrow-left"
    size="small"
    variant="text"
    color="red"
    class="ml-4"
    @click="handlePrevious"
  >
  </v-btn>
  <h1 class="text-4xl font-semibold mt-6 mb-8 text-center text-red">New choice</h1>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="surveyName"
        label="Survey Name"
        required
        :rules="rules"
        variant="outlined"
      ></v-text-field>

      <v-btn
        @click="handleNext"
        size="large"
        color="red"
        variant="tonal"
        class="mt-2"
        type="submit"
        block
        >Next</v-btn
      >
    </v-form>
  </v-sheet>
</template>
