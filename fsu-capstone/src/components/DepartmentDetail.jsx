import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDepartmentById, removeDepartment } from "../api";

const DepartmentDetailPage = ({ token }) => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  useEffect(() => {
    const getDepartment = async () => {
      const data = await fetchDepartmentById(id);
      setDepartment(data);
    };
    getDepartment();
  }, [id]);

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
      {!token ? (
        <p>You must be an admin to make changes</p>
      ) : (
        <div className="adminOptions">
          <button onClick={() => removeDepartment(department.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DepartmentDetailPage;
