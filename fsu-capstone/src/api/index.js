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
    const result = await response.json();
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
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

//==================login=attempt==========================
export const userLogin = async (data) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAccount(token) {
  try {
      const response = await fetch(`${API_URL}/user`, {
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`},
      });
          const result = await response.json();
          return result;
  } catch (error) {
      console.error(error);
  }
}

export async function removeDepartment(id) {
  try {
    const response = await fetch(`${API_URL}/departments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Failed to remove department");
    }
    return result;
  } catch (error) {
    console.error("Error removing the department", error);
  }
}

export const createDepartment = async (data) => {
  try {
    const response = await fetch(`${API_URL}/departments`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
