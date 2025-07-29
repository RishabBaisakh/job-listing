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
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchLocations({ commit }) {
      commit("setLoading", true);
      try {
        const response = await apiFetchLocations();
        commit("setLocations", response.data);
      } catch (error) {
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
