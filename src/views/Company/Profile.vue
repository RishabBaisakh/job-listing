<script setup>
import CompanyDetails from "@/components/company/CompanyDetails.vue";
import CompanyJobOptions from "@/components/company/CompanyJobOptions.vue";
import { computed } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useStore } from "vuex";

const store = useStore();

const company = computed(() => store.getters["company/getCompany"]);
const isLoading = computed(() => store.getters["company/getLoading"]);

const testLocation = {
  city: "Saskatoon",
  province: "Sasketchwan",
};
const testIndustry = "Technology";
const testWebsite = "https://www.google.com";
</script>

<template>
  <div v-if="isLoading" class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
  <div v-else class="my-4 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-2">
        <CompanyDetails
          v-bind="{
            ...company,
            location: testLocation,
            industry: testIndustry,
            website: testWebsite,
          }"
        />
      </div>
      <div class="col-span-1">
        <CompanyJobOptions v-bind="{ jobs: company.jobs }" />
      </div>
    </div>
  </div>
</template>
