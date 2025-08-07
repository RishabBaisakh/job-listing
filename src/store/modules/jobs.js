import {
  fetchJobs as apiFetchJobs,
  fetchJobById as apiFetchJobById,
  deleteJobById as apiDeleteJobById,
  updateJobById as apiUpdateJobById,
  addJob as apiAddJob,
} from "@/services/jobServices";

export default {
  namespaced: true,
  state: () => ({
    jobs: [],
    selectedJob: null,
    listSelection: null,
    isLoading: false,
  }),
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setSelectedJob(state, selectedJob) {
      state.selectedJob = selectedJob;
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
    updateJob(state, updatedJob) {
      const index = state.jobs.findIndex((job) => job._id === updatedJob._id);
      if (index !== -1) {
        state.jobs.splice(index, 1, updatedJob);
      }
    },
    addJobToList(state, newJob) {
      state.jobs.push(newJob);
    },
    setListSelection(state, jobId = null) {
      if (!jobId) {
        state.listSelection = state.jobs[0];
      } else {
        state.jobs.forEach((job) => {
          if (job._id.toString() === jobId) state.listSelection = job;
        });
      }
    },
  },
  actions: {
    async fetchJobs({ commit }) {
      commit("setLoading", true);
      try {
        const res = await apiFetchJobs();
        commit("setJobs", res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => commit("setLoading", false), 1500);
      }
    },
    async fetchJobById({ commit }, jobId) {
      commit("setLoading", true);
      try {
        const res = await apiFetchJobById(jobId);
        commit("setSelectedJob", res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => commit("setLoading", false), 1500);
      }
    },
    async deleteJobById({ commit }, jobId) {
      commit("setLoading", true);
      try {
        await apiDeleteJobById(jobId);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async updateJobById({ commit }, updateJob) {
      commit("setLoading", true);
      try {
        const res = await apiUpdateJobById(updateJob);
        commit("updateJob", res.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async addJob({ commit }, newJob) {
      commit("setLoading", true);
      try {
        const res = await apiAddJob(newJob);
        commit("addJobToList", res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    setListSelection({ commit }, jobId = null) {
      commit("setListSelection", jobId);
    },
  },
  getters: {
    getJobById: (state) => (id) => {
      const match = state.jobs.find((job) => String(job._id) === String(id));
      if (match) return match;

      if (state.selectedJob && String(state.selectedJob._id) === String(id)) {
        return state.selectedJob;
      }

      return null;
    },
    getListSelection: (state) => {
      return state.listSelection;
    },
  },
};
