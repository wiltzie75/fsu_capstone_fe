import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { removeFaculty } from "../api";

const FacultyDetail = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getFaculty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/faculty/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setFaculty(data);
      } catch (err) {
        setError("Failed to load faculty details.");
      } finally {
        setLoading(false);
      }
    };

    getFaculty();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!faculty) return <p className="p-4">No faculty found.</p>;

  const { name, bio, email, profileImage, department } = faculty;

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this faculty member?"
    );
    if (!confirmed) return;

    const result = await removeFaculty(faculty.id);

    if (result) {
      navigate("/");
    } else {
      console.error("Failed to delete faculty");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={profileImage}
          alt={name}
          className="w-48 h-48 rounded-full object-cover border shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">{bio}</p>
          <p className="text-blue-600">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          {department && (
            <p className="mt-2">
              Department:{" "}
              <Link
                to={`/departments/${department.id}`}
                className="text-indigo-600 underline"
              >
                {department.name}
              </Link>
            </p>
          )}
          {!localStorage.getItem("token") ? (
            <p>You must be an admin to make changes</p>
          ) : (
            <div className="adminOptions">
              <button style={{ color: "red" }} onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyDetail;
