<script setup>
import JobListing from "./JobListing.vue";
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useStore } from "vuex";

const store = useStore();

const jobs = computed(() => store.state.jobs.jobs);
const isLoading = computed(() => store.state.jobs.isLoading);

onMounted(() => {
  store.dispatch("jobs/fetchJobs");
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <!-- show job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, limit) || jobs"
          :key="job.id"
          :job="job"
        >
          {{ job.title }}
        </JobListing>
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
