import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAccount, createDepartment } from "../api";

const Account = ({ token }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getAccountDetails() {
      const token = localStorage.getItem("token");
      const APIResponse = await fetchAccount(token);
      setAccount(APIResponse.user);
    }
    getAccountDetails();
  }, []);
  
  async function submitHandle(e) {
          e.preventDefault()
          console.log("clicked")
          const data = {
              name: name,
              description: description,
              image: imageUrl,
              email: email,
              faculty: faculty
          }

          createDepartment(data)
          resetForm();
      }

      async function resetForm() {
              setName("");
              setDescription("");
              setImageUrl("");
              setEmail("");
              setFaculty("");
      
              const result = await createDepartment(data)
      
              if(result.error) return setError(result.error)
      
              if(!result.error) {
                  setError(null)
              }
      
              localStorage.setItem("token", result.token)
              console.log("reg set token => ",localStorage.getItem("token"))
              navigate("/")
              window.location.reload()
              console.log("register result", result)
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
                <input
                type="text"
                id="faculty"
                value={faculty}
                placeholder="faculty"
                onChange={(e) => {
                  setFaculty(e.target.value)}}
                />
        <button className="button" type="submit" onClick={submitHandle}>Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Account;
