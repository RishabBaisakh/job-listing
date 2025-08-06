<script setup>
import company from "@/assets/img/placeholders/company.png";
import Card from "primevue/card";

const props = defineProps({
  job: Object,
});
</script>

<template>
  <Card class="group hover:cursor-pointer">
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
      </div>
    </template>
    <template #content>
      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between">
        <div class="text-orange-700">
          <i class="pi pi-map-marker text-orange"></i>
          {{ `${job.location.city}, ${job.location.province}` }}
        </div>
      </div>
    </template>
  </Card>
</template>
