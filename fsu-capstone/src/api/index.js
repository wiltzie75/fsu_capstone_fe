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
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error fetching department", error);
  }
};

export const fetchFaculty = async () => {
  try {
    const response = await fetch(`${API_URL}/faculty`);
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};

export const fetchFacultyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/faculty/${id}`);
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error fetching faculty", error);
  }
};

//===================register function======================
export const createAccount = async (data) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    console.log("createAccount response => ", response)
    const result = response.json()
  } catch (error) {
    console.log(error)
  }
}