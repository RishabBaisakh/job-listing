import api from "./axios";

export const updateCompanyById = async (updatedCompany) => {
  try {
    const response = await api.put(
      `/companies/${updatedCompany._id}`,
      updatedCompany
    );
    return response;
  } catch (error) {
    console.error("Failed to update job", error);
    throw error;
  }
};
