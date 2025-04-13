import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDepartmentById, removeDepartment } from "../api";

const DepartmentDetailPage = ({ token }) => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepartment = async () => {
      const data = await fetchDepartmentById(id);
      setDepartment(data);
    };
    getDepartment();
  }, [id]);

  useEffect(() => {
      if(localStorage.getItem("token")){console.log(true)}
      if(!localStorage.getItem("token")){console.log(false)}
    },[localStorage.getItem("token")])

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this department?");
    if (!confirmed) return;
  
    const result = await removeDepartment(department.id);
    
    if (result) {
      navigate("/");
    } else {
      console.error("Failed to delete department");
    }
  };

  if (!department) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h1>{department.name}</h1>
        <p>{department.description}</p>
        <img src={department.image} alt="department image" />
        <h2>Faculty</h2>
        <ul>
          {department.faculty?.map((professor) => (
            <li key={professor.id}>
              <a href={`/faculty/${professor.id}`}>{professor.name}</a> 
            </li>
          )) || <li>No faculty listed</li>}
        </ul>
      </div>
      {!localStorage.getItem("token") ? (
        <p>You must be an admin to make changes</p>
      ) : (
        <div className="adminOptions">
          <button style={{ color: "red" }} onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DepartmentDetailPage;
