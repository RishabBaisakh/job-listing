<script setup>
import JobDescription from "@/components/JobDescription.vue";
import JobListings from "@/components/JobListings.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("jobs/fetchJobs");
  store.dispatch("jobs/setListSelection");
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 h-full min-h-0">
    <div class="col-span-1 h-full min-h-0 overflow-y-auto">
      <JobListings />
    </div>
    <div class="col-span-2 h-full min-h-0 overflow-y-auto">
      <JobDescription />
    </div>
  </div>
</template>
