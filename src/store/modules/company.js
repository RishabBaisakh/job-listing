import { fetchCompanyById as apiFetchCompanyById } from "@/services/companyServices";

export default {
  namespaced: true,

  state: () => ({
    company: null,
    isLoading: false,
    error: null,
  }),

  mutations: {
    setLoading(state, val) {
      state.isLoading = val;
    },
    setCompany(state, company) {
      state.company = company;
    },
  },
  actions: {
    async fetchCompanyById({ commit }, id) {
      commit("setLoading", true);
      try {
        const company = await apiFetchCompanyById(id);
        if (company._id) {
          commit("setCompany", company);
        }
      } catch (error) {
        console.error("Error updating company: ", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getCompany: (state) => {
      return state.company;
    },
    getLoading: (state) => {
      return state.loading;
    },
  },
};
