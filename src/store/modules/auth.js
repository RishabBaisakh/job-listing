import {
  fetchCurrentUser,
  loginEmployer,
  registerEmployer,
} from "@/services/authServices";

export default {
  namespaced: true,
  state: () => ({
    user: null,
    isLoading: false,
    next: "/jobs",
  }),

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setLoading: (state, val) => {
      state.isLoading = val;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  actions: {
    async register({ commit }, user) {
      commit("setLoading", true);
      try {
        return await registerEmployer(user);
      } catch (error) {
        console.error("Error while registering the user", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async login({ commit }, user) {
      commit("setLoading", true);
      try {
        const currentUser = await loginEmployer(user);
        commit("setUser", currentUser);
      } catch (error) {
        console.error("Error while logging in", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async initializeSession({ commit }) {
      commit("setLoading", true);
      try {
        const res = await fetchCurrentUser();
        commit("setUser", res.data.user);
      } catch (error) {
        console.error("Error while initializing session", error);
        commit("clearUser");
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getUser: (state) => {
      return state.user || null;
    },
  },
};
