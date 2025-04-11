// components/DepartmentList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await API.get("/departments");
        setDepartments(res.data);
      } catch (err) {
        console.error("Failed to fetch departments:", err);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <Link
            to={`/departments/${dept._id}`}
            key={dept._id}
            className="p-4 bg-white shadow rounded hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{dept.name}</h2>
            <p className="text-sm text-gray-600">{dept.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;
