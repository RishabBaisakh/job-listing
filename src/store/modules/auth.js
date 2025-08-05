import {
  fetchCurrentUser,
  loginEmployer,
  logoutEmployer,
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
        const user = await fetchCurrentUser();
        commit("setUser", user);
      } catch (error) {
        console.error("Error while initializing session", error);
        commit("clearUser");
      } finally {
        commit("setLoading", false);
      }
    },
    async logout({ commit }) {
      commit("setLoading", true);
      try {
        await logoutEmployer();
        commit("clearUser");
      } catch (error) {
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
