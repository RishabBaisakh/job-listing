<script setup>
import JobListing from "../JobListing.vue";

const { jobs, showAllJobDetails } = defineProps({
  jobs: Array,
  showAllJobDetails: Function,
});
</script>

<template>
  <section>
    <div class="flex justify-between mb-5">
      <h3 class="text-gray-500 font-semibold">Most recent job</h3>
      <button
        class="text-green-600 hover:underline bg-transparent border-none p-0 cursor-pointer"
        @click="async () => await showAllJobDetails()"
      >
        View All
      </button>
    </div>
    <JobListing :job="jobs[0]" />
  </section>
</template>
