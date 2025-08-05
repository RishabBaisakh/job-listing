import api from "./axios";

export const registerEmployer = async (employer) => {
  try {
    return await api.post("/auth/register", employer);
  } catch (error) {
    console.error("Failed to register new employer");
    throw error;
  }
};

export const loginEmployer = async (employer) => {
  try {
    const response = await api.post("/auth/login", employer);
    return response.data.user;
  } catch (error) {
    console.error("Failed to login in user", error);
    throw error;
  }
};

export const fetchCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data.user;
  } catch (error) {
    console.error("Failed to fetch the current user", error);
    throw error;
  }
};

export const logoutEmployer = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Failed to logout employer", error);
    throw error;
  }
};
