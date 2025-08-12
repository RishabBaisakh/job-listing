<script setup>
import JobListing from "../JobListing.vue";

defineProps({
  jobs: Array,
});
</script>

<template>
  <section>
    <h3 class="text-gray-500 font-semibold">Jobs</h3>
    <JobListing v-for="job in jobs" :key="job.id" :job="job">
      {{ job.title }}
    </JobListing>
  </section>
</template>
