<script setup>
import coverPlaceholder from "@/assets/img/placeholders/companyCover.png";
import logoPlaceholder from "@/assets/img/placeholders/companyLogo.jpg";

// TODO: Define company object type
defineProps({
  _id: String,
  name: String,
  location: Object,
  description: String,
  industry: String,
  website: String,
});
</script>

<template>
  <section class="bg-white shadow-md rounded">
    <div
      class="relative h-64 w-full rounded-t bg-gray bg-center bg-cover mb-4"
      :style="{
        backgroundImage: `url(${coverPlaceholder})`,
      }"
      aria-label="Company cover image"
    >
      <img
        class="absolute -bottom-6 left-16 h-32 w-32 rounded object-cover border-4 border-white shadow-lg"
        :src="logoPlaceholder"
        alt="Company logo"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center space-x-4 mb-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">{{ name }}</h1>
          <p class="text-md text-gray-500">
            {{ industry }} | {{ location.city }}, {{ location.province }}
          </p>
        </div>
      </div>

      <section class="mb-6">
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p class="text-gray-700 leading-relaxed">
          {{ description }}
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Industry</h2>
        <p class="text-gray-700 leading-relaxed">{{ industry }}</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">Website</h2>
        <a
          :href="website"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 hover:underline"
          >{{ website }}</a
        >
      </section>
    </div>
  </section>
</template>
