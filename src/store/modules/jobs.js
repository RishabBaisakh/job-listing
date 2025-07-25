import { fetchJobs } from "@/services/jobServices";

export default {
  namespaced: true,
  state: () => ({
    jobs: [],
    isLoading: false,
  }),
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
  },
  actions: {
    async fetchJobs({ commit }) {
      commit("setLoading", true);
      try {
        const res = await fetchJobs();
        commit("setJobs", res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => commit("setLoading", false), 1500);
      }
    },
  },
};
