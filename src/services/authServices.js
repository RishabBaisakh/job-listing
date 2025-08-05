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
    return await api.get("/auth/me");
  } catch (error) {
    console.error("Failed to fetch the current user", error);
    throw error;
  }
};
