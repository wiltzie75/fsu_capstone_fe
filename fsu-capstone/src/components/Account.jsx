import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAccount, createDepartment, createFaculty } from "../api";

const API_URL="http://localhost:3000/api";
const Account = ({ token }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");
  const [departmentImageUrl, setDepartmentImageUrl] = useState("");
  const [departmentEmail, setDepartmentEmail] = useState("");
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState([]);
  const [facultyName, setFacultyName] = useState("");
  const [bio, setBio] = useState("");
  const [facultyImageUrl, setFacultyImageUrl] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAccountDetails() {
      const token = localStorage.getItem("token");
      const APIResponse = await fetchAccount(token);
      setAccount(APIResponse.user);
    }

    async function getFacultyList() {
      try {
        const response = await fetch(`${API_URL}/faculty`)
        const result = await response.json();
        setFacultyList(Array.isArray(result) ? result : []);
      } catch (error) {
        console.log("Error fetching faculty:", error);
      }
    }

    async function getDepartmentList() {
      try {
        const response = await fetch(`${API_URL}/departments`)
        const result = await response.json();
        setDepartmentList(Array.isArray(result) ? result : []);
      } catch (error) {
        console.log("Error fetching department:", error);
      }
    }

    getAccountDetails();
    getFacultyList();
    getDepartmentList();
  }, []);
  
  async function resetDepartmentForm() {
    setDepartmentName("");
    setDescription("");
    setDepartmentImageUrl("");
    setDepartmentEmail("");
    setSelectedFaculty([]);
    if(error) {
        setError(null)
    }
    navigate("/")
  }

  async function submitHandle(e) {
    e.preventDefault()
    console.log("clicked")
    const data = {
        name: departmentName,
        description: description,
        image: departmentImageUrl,
        email: departmentEmail,
        facultyIds: selectedFaculty.map((id) => Number(id)),
    };
    const result = await createDepartment(data);

    if(result.error) {
      setError(result.error);
    } else {
      setError(null);
      localStorage.setItem("token", result.token);
      resetDepartmentForm();
    }
  }

  async function resetFacultyForm() {
    setFacultyName("");
    setBio("");
    setFacultyImageUrl("");
    setFacultyEmail("");
    setSelectedDepartment("");
    navigate("/")
  }

  async function submitFacultyHandle(e) {
    e.preventDefault()
    console.log("clicked")
    const data = {
        name: facultyName,
        bio: bio,
        image: facultyImageUrl,
        email: facultyEmail,
        facultyIds: selectedFaculty.map((id) => Number(id)),
    };
    const result = await createFaculty(data);

    if(result.error) {
      setError(result.error);
    } else {
      setError(null);
      localStorage.setItem("token", result.token);
      resetFacultyForm();
    }
  }

  //     =============example of syntax============

  //     account: {
  //     id: 18,
  //     firstName: "Josh",
  //     lastName: "Balls",
  //     email: "balls@gmail.com",
  //     password: "$2b$10$hzF5pvO0cQO2qQupHa/juuSaRCODnBgC5NROkFP/9xSRGVz2cbeza",
  //     isAdmin: false
  // }

  return (
    <>
    <div>
      {account && (
        <div>
          <h2>Welcome! {account.firstName} {account.lastName}</h2>
        </div>
      )}

{/* Forms */}
      <div className="forms">
        <div className="departmentForms">
          <div>Create a Department</div>
            <form className="formContainer">
              <label>
                  Name: <input 
                      type="text" 
                      value={departmentName}
                      placeholder="name"
                      onChange={(e) => {
                          setDepartmentName(e.target.value);
                      }}
                      />
              </label>
              <label>
                  Description: <textarea
                      type="text" 
                      value={description}
                      placeholder="description"
                      rows={6}
                      cols={50}
                      onChange={(e) => {
                          setDescription(e.target.value)}}
                      />

              </label>
              <label>Image Link: </label>
                      <input 
                      type="text"
                      id="image"
                      value={departmentImageUrl}
                      placeholder="image"
                      onChange={(e) => {
                          setDepartmentImageUrl(e.target.value)}}
                      />
              <label>Email: </label>
                      <input
                      type="text"
                      id="email"
                      value={departmentEmail}
                      placeholder="email"
                      onChange={(e) => {
                        setDepartmentEmail(e.target.value)}}
                      />
              <label>Faculty: </label>
                      <select
                        multiple
                        value={selectedFaculty}
                        onChange={(e) => 
                          setSelectedFaculty(
                            Array.from(e.target.selectedOptions, (option) => option.value)
                          )}
                      >
                        <option value="">Select a faculty member</option>
                        {facultyList.map((member) => (
                          <option key={member.id} value={member.id}>
                            {member.name}
                          </option>
                        ))}
                      </select>
              <button className="button" type="submit" onClick={submitHandle}>Submit</button>
            </form>
          </div>
        <div className="facultyForm">
          <div>Create a Faculty</div>
            <form className="formContainer">
              <label>Name: 
              <input 
                      type="text" 
                      value={facultyName}
                      placeholder="name"
                      onChange={(e) => {
                          setFacultyName(e.target.value);
                      }}
                      />
              </label>
              <label>Bio: 
              <textarea
                      type="text" 
                      value={bio}
                      placeholder="bio"
                      rows={6}
                      cols={50}
                      onChange={(e) => {
                          setBio(e.target.value)}}
                      />

              </label>
              <label>Image Link:
                      <input 
                      type="text"
                      id="image"
                      value={facultyImageUrl}
                      placeholder="image"
                      onChange={(e) => {
                          setFacultyImageUrl(e.target.value)}}
                      />
              </label>
              <label>Email: 
                      <input
                      type="text"
                      id="email"
                      value={facultyEmail}
                      placeholder="email"
                      onChange={(e) => {
                        setFacultyEmail(e.target.value)}}
                      />
              </label>
              <label>Department: 
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                <option value="">Select a department</option>
                {departmentList.map((dept) => (
                <option key={dept.id} value={dept.id}>
                {dept.name}
                </option>
                ))}
              </select>
              </label>
              <button className="button" type="submit" onClick={submitFacultyHandle}>Submit</button>
            </form>
          </div>
      </div>
    </div>
    </>
  )
}

export default Account;
