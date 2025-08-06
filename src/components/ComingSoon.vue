<script setup>
import Card from "primevue/card";
</script>

<template>
  <Card class="m-5">
    <template #title>
      <i class="pi pi-clock text-green-600 !text-7xl mb-5 animate-pulse"></i>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
    </template>
    <template #content>
      <p class="text-base md:text-xl mb-5">
        We're working hard to bring this page to life. Stay tuned!
      </p>
      <RouterLink
        to="/"
        class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4 transition-colors duration-200"
      >
        Go Back Home
      </RouterLink>
    </template>
  </Card>
</template>
