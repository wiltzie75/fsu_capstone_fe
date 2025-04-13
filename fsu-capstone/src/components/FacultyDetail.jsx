import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FacultyDetail = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [departmentName, setDepartmentName] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const getFaculty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/faculty/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setFaculty(data);
        if (data.departmentId) {
          try {
            const deptResponse = await fetch(`http://localhost:3000/api/departments/${data.departmentId}`);
            if (deptResponse.ok) {
              const deptData = await deptResponse.json();
              setDepartmentName(deptData.name);
            }
          } catch (deptErr) {
            console.error("Failed to fetch department:", deptErr);
          }
        }
      } catch (err) {
        setError("Failed to load faculty details.");
      } finally {
        setLoading(false);
      }
    };

    getFaculty();
  }, [id]);

  if (loading) return <p className="loadingMessage">Loading...</p>;
  if (error) return <p className="errorMessage">{error}</p>;
  if (!faculty) return <p className="noFacultyMessage">No faculty found.</p>;

  const { name, bio, email, image } = faculty;
  
  return (
    <div>
      <div className="facultyDetailWrapper">
      <div className="facultyImageWrapper">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="facultyInfoWrapper">
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        {faculty.departmentId && (
          <p>
            Department:{" "}
            <Link
              to={`/department/${faculty.departmentId}`}
            >
              {departmentName || "Loading department..."}
            </Link>
          </p>
        )}
      </div>
      </div>
    </div>
  );
};

export default FacultyDetail;
