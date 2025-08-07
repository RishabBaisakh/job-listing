<script setup>
import JobListing from "./JobListing.vue";
import { computed, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useStore } from "vuex";

const store = useStore();

const jobs = computed(() => store.state.jobs.jobs);
const listSelection = computed(() => store.state.jobs.listSelection);
const isLoading = computed(() => store.state.jobs.isLoading);
</script>

<template>
  <section class="h-full min-h-0 overflow-y-auto">
    <div class="container-xl lg:container m-auto">
      <div v-if="isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <JobListing
        v-else
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :isSelected="listSelection._id === job._id"
      >
        {{ job.title }}
      </JobListing>
    </div>
  </section>
</template>
