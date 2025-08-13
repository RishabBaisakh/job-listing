<script setup>
import company from "@/assets/img/placeholders/company.png";
import Card from "primevue/card";
import { useStore } from "vuex";

const store = useStore();

const { job } = defineProps({
  job: Object,
  isSelected: Boolean,
});

const handleListingSelection = () => {
  store.dispatch("jobs/setListSelection", job._id);
};
</script>

<template>
  <Card
    :class="[
      'group hover:cursor-pointer !rounded-none border',
      isSelected ? 'border-l-4 border-green-700 !bg-gray-100 shadow-lg' : '',
    ]"
    @click="handleListingSelection"
  >
    <template #title>
      <div class="mb-3">
        <div class="flex mb-2">
          <img class="h-10 w-auto" :src="company" />
          <h2 class="text-xl ml-3 my-auto">{{ job.company.name }}</h2>
        </div>
        <h3
          class="text-lg font-bold group-hover:underline transition duration-200"
        >
          {{ job.title }}
          <span class="text-gray-600 font-thin">{{ `(${job.type})` }}</span>
        </h3>
        <div class="flex text-gray-500 align-center my-1 text-sm">
          <i class="pi pi-clock my-auto"></i>
          <p class="mx-2">
            {{ new Date(job.datePosted).toDateString() }}
          </p>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex justify-between">
        <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

        <div class="text-orange-700">
          <i class="pi pi-map-marker text-orange"></i>
          {{ `${job.location.city}, ${job.location.province}` }}
        </div>
      </div>
    </template>
  </Card>
</template>
