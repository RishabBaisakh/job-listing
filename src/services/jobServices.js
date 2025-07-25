import api from "./axios";

export const fetchJobs = async () => {
  try {
    const data = await api.get("/jobs");
    return data;
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    throw error;
  }
};

export const fetchJobById = async (id) => {
  try {
    const response = await api.get(`jobs/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch job by id", error);
    throw error;
  }
};

export const deleteJobById = async (id) => {
  try {
    const response = await api.delete(`jobs/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to delete job", error);
    throw error;
  }
};

export const addJob = async (newJob) => {
  try {
    const response = await api.post("/jobs", newJob);
    return response;
  } catch (error) {
    console.error("Failed to add job", error);
    throw error;
  }
};

export const updateJobById = async (updateJob) => {
  try {
    const response = await api.put(`/jobs/${updateJob._id}`, updateJob);
    return response;
  } catch (error) {
    console.error("Failed to update job", error);
    throw error;
  }
};
