import api from "./axios";

export const updateCompanyById = async (updatedCompany) => {
  try {
    const response = await api.put(
      `/companies/${updatedCompany._id}`,
      updatedCompany
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update job", error);
    throw error;
  }
};

export const fetchCompanyById = async (id) => {
  try {
    const response = await api.get(`/companies/${id}`);
    return response.data.company;
  } catch (error) {
    console.error(`Failed to fetch company by id (${id})`, error);
    throw error;
  }
};
