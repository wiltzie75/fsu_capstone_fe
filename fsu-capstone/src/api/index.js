const API_URL = "http://localhost:5000/api";

export const fetchDepartments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/departments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments", error);
  }
};

export const fetchDepartmentById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/departments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching department", error);
  }
};

export const fetchFaculty = async () => {
  try {
    const response = await fetch(`${BASE_URL}/faculty`);
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};

export const fetchFacultyById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/faculty/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};
