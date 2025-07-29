import { updateCompanyById } from "@/services/companyServices";

export default {
  namespaced: true,

  state: () => ({
    companies: [],
    isLoading: false,
    error: null,
  }),

  mutations: {
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
    updateCompanyInList(state, updatedCompany) {
      const index = state.companies.findIndex(
        (c) => c._id === updatedCompany._id
      );
      if (index !== -1) {
        state.companies.splice(index, 1, updatedCompany);
      }
    },
  },

  actions: {
    async updateCompany({ commit }, updatedCompany) {
      commit("setLoading", true);
      try {
        const res = await updateCompanyById(updatedCompany);
        commit("updateCompanyInList", res.data);
      } catch (error) {
        console.error("Error updating company:", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
