<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="bg-green-50 flex-grow">
      <RouterView />
    </main>
  </div>
</template>
