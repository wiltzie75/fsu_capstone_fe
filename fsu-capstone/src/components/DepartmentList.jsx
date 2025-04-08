import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("http://localhost:3000/departments");
      if (res.ok) {
        const data = await res.json();
        setDepartments(data);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="search-bar">
      <div className="text-2xl font-bold mb-4">Departments</div>
      <ul>
        {departments.map((dept) => (
          <div key={dept.id}>
            <Link
              to={`/departments/${dept.id}`}
              className="text-blue-500 underline"
            >
              {dept.name}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
