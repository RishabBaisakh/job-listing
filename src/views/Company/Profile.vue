<script setup>
import coverPlaceholder from "@/assets/img/placeholders/companyCover.png";
import logoPlaceholder from "@/assets/img/placeholders/companyLogo.png";
import { computed } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useStore } from "vuex";

const store = useStore();

const company = computed(() => store.getters["company/getCompany"]);
const isLoading = computed(() => store.getters["company/getLoading"]);
</script>

<template>
  <div v-if="isLoading" class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
  <div v-else class="my-4 mx-auto p-6 bg-white rounded shadow-md">
    <div
      class="h-48 w-full rounded-t bg-gray-200 bg-center bg-cover mb-4"
      :style="{
        backgroundImage: `url(${coverPlaceholder})`,
      }"
      aria-label="Company cover image"
    >
      <img
        class="h-32 w-32 absolute rounded-full object-cover border border-gray-300"
        :src="logoPlaceholder"
        alt="Company logo"
      />
    </div>

    <div class="flex items-center space-x-4 mb-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">{{ company.name }}</h1>
        <p class="text-md text-gray-500">
          Technology | Saskatoon, Sasketchewan
        </p>
      </div>
    </div>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">About Us</h2>
      <p class="text-gray-700 leading-relaxed">
        {{ company.description }}
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Industry</h2>
      <p class="text-gray-700 leading-relaxed">Technology</p>
    </section>

    <!-- Website -->
    <section>
      <h2 class="text-xl font-semibold mb-2">Website</h2>
      <a
        href="https://www.acmetechnologies.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:underline"
        >www.acmetechnologies.com</a
      >
    </section>
  </div>
</template>
