import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { fetchDepartments } from "../api";

const Home = () => {
  const [departments, GetDepartments] = useState([]);
  const [facultys, GetFacultys] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllDepartments() {
      try {
        const APIResponse = await fetchDepartments();
        console.log(APIResponse);
        GetDepartments(APIResponse);
        if (APIResponse) {
          GetDepartments(APIResponse);
        } else {
          setError("Failed to fetch Department");
        }
      } catch (error) {
        setError("Failed to fetch Departments");
      }
    }
    getAllDepartments();
  }, []);

  const departmentsToDisplay = 
  departments.filter((department) => department.name)

  return (
    <section className="background-image">
      <div className="home-content1">
        {departmentsToDisplay.map((department) => {
          return (
            <div style={{ padding: "1rem" }} key={department.id}>
              <h2>Departments</h2>
              <ol>
                {department.map((department) => (
                    <li key={department.id}>
                        <Link to={`/department/${department.id}`}>{department.name}</Link>
                    </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
