import { fetchLocations as apiFetchLocations } from "@/services/locationServices";

export default {
  namespaced: true,

  state: () => ({
    locations: [],
    isLoading: false,
  }),

  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
      console.log("🚀 ~ setLocations ~ state.locations:", state.locations);
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchLocations({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      console.log("called!");
      try {
        const response = await apiFetchLocations();
        console.log("🚀 ~ fetchLocations ~ response:", response);
        commit("setLocations", response.data);
      } catch (error) {
        console.log("Failed to fetch locations", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },

  getters: {
    allLocations: (state) => state.locations,
    isLoadingLocations: (state) => state.isLoading,
  },
};
