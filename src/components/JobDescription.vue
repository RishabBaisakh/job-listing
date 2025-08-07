<script setup>
import { computed } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useStore } from "vuex";

const store = useStore();

const job = computed(() => store.getters["jobs/getListSelection"]);
const isLoading = computed(() => store.state.jobs.isLoading);
</script>

<template>
  <div v-if="isLoading && job" class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
  <section v-else>
    <div class="bg-white h-full min-h-0 overflow-y-auto border">
      <div class="shadow-md text-center md:text-left p-6">
        <div class="text-gray-500 mb-4">{{ job.type }}</div>
        <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
        <div
          class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
        >
          <div class="text-orange-700 mb-3">
            <i class="pi pi-map-marker text-orange"></i>
            {{ `${job.location.city}, ${job.location.province}` }}
          </div>
        </div>

        <div>
          <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

          <p class="mb-4">
            {{ job.description }}
          </p>
          <p class="mb-4">
            {{ job.description }}
          </p>
          <p class="mb-4">
            {{ job.description }}
          </p>

          <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

          <p class="mb-4">{{ job.salary }} / Year</p>
        </div>
      </div>
    </div>
  </section>
</template>
