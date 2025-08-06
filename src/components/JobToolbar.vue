<script setup>
import { ref, watch } from "vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

const searchQuery = ref("");
const selectedType = ref(null);
const selectedSort = ref(null);

const jobTypes = [
  { label: "All Types", value: null },
  { label: "Full-time", value: "full-time" },
  { label: "Part-time", value: "part-time" },
  { label: "Contract", value: "contract" },
  { label: "Internship", value: "internship" },
];

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Highest Salary", value: "high" },
  { label: "Lowest Salary", value: "low" },
];

const emit = defineEmits(["update:search", "update:type", "update:sort"]);

watch(searchQuery, (val) => emit("update:search", val));
watch(selectedType, (val) => emit("update:type", val));
watch(selectedSort, (val) => emit("update:sort", val));
</script>

<template>
  <div
    class="sticky top-16 z-50 bg-white p-4 shadow flex flex-col md:flex-row md:items-center gap-4"
  >
    <div class="flex-grow">
      <span class="p-input-icon-left w-full block">
        <InputText
          v-model="searchQuery"
          placeholder="Search jobs..."
          class="w-full"
        />
      </span>
    </div>

    <div class="flex flex-col md:flex-row gap-4 md:items-center">
      <Dropdown
        v-model="selectedType"
        :options="jobTypes"
        optionLabel="label"
        placeholder="Job Type"
        class="w-48"
      />
      <Dropdown
        v-model="selectedSort"
        :options="sortOptions"
        optionLabel="label"
        placeholder="Sort By"
        class="w-48"
      />
    </div>
  </div>
</template>
