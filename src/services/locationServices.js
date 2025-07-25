import api from "./axios";

export const fetchLocations = async () => {
  try {
    const data = await api.get("/locations");
    return data;
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    throw error;
  }
};
