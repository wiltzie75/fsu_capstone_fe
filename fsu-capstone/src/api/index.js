const API_URL = "http://localhost:3000/api";

export const fetchDepartments = async () => {
  try {
    const response = await fetch(`${API_URL}/departments`);
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error fetching departments", error);
  }
};

export const fetchDepartmentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/departments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching department", error);
  }
};

export const fetchFaculty = async () => {
  try {
    const response = await fetch(`${API_URL}/faculty`);
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};

export const fetchFacultyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/faculty/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};
