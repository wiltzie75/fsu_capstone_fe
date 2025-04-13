import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAccount, createDepartment } from "../api";

const API_URL="http://localhost:3000/api";
const Account = ({ token }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState([]);
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
    getAccountDetails();
    getFacultyList();
  }, []);
  
async function resetForm() {
  setName("");
  setDescription("");
  setImageUrl("");
  setEmail("");
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
      name: name,
      description: description,
      image: imageUrl,
      email: email,
      facultyIds: selectedFaculty.map((id) => Number(id)),
  };
  const result = await createDepartment(data);

  if(result.error) {
    setError(result.error);
  } else {
    setError(null);
    localStorage.setItem("token", result.token);
    resetForm();
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
    <div>
      {account && (
        <div>
          <h2>Welcome! {account.firstName} {account.lastName}</h2>
        </div>
      )}

{/* Department Form */}
    <div className="departmentForm">
    <div>Create a department</div>
    <form className="formContainer">
        <label>
            Name: <input 
                type="text" 
                value={name}
                placeholder="name"
                onChange={(e) => {
                    setName(e.target.value);
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
                value={imageUrl}
                placeholder="image"
                onChange={(e) => {
                    setImageUrl(e.target.value)}}
                />
        <label>Email: </label>
                <input
                type="text"
                id="email"
                value={email}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value)}}
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
    </div>
  );
};

export default Account;
