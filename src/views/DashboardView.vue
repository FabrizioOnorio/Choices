<script setup lang="ts">

</script>

<template>
  <div class="h-full flex flex-col items-center">
    <div class="flex flex-col text-wrap text-center mt-6">
      <h1 class="text-4xl font-semibold text-red">Choices.</h1>
      <p class="text-2xl font-semibold text-red">Group Decisions Made Easy</p>
    </div>
    <div class="flex gap-4 bg-[#cbd5e0] items-center mt-8 w-[340px]">
      <router-link to="/create-survey" class="flex gap-4 h-full w-full py-10 px-8">
        <p class="text-2xl font-semibold">Make a new choice</p>
        <v-icon icon="mdi-plus" size="large" variant="text"></v-icon>
      </router-link>
    </div>
    <div class="mt-8">List of previous desicions made:...</div>
  </div>
</template>
