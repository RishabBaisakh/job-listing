import store from "@/store";
import { computed, watchEffect } from "vue";

export const useLocations = () => {
  const locations = computed(() => store.getters["locations/allLocations"]);

  watchEffect(async () => {
    if (locations.value.length === 0) {
      try {
        await store.dispatch("locations/fetchLocations");
      } catch (error) {
        console.error("Failed to fetch locations");
      }
    }
  });

  return locations;
};
