import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDepartmentById } from "../api";

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  console.log("Faculty:", department.faculty);

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
      <h1>{department.name}</h1>
      <p>{department.description}</p>
      <h2>Faculty</h2>
      <ul>
        {department.faculty?.map((professor) => (
          <li key={professor.id}>
            <a href={`/faculty/${professor.id}`}>{professor.name}</a> 
          </li>
         )) || <li>No faculty listed</li>}
      </ul>
    </div>
  );
};

export default DepartmentDetailPage;
