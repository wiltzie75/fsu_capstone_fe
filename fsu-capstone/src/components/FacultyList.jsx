import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/faculty");
        if (!response.ok) throw new Error("Failed to fetch faculty.");
        const data = await response.json();
        setFacultyList(data);
      } catch (err) {
        setError("Could not load faculty.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  if (loading) return <p className="p-4">Loading faculty...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!facultyList.length) return <p className="p-4">No faculty found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Faculty Directory</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {facultyList.map((professor) => (
          <li
            key={professor.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Link
              to={`/faculty/${professor.id}`}
              className="flex items-center gap-4"
            >
              <img
                src={professor.profileImage}
                alt={professor.name}
                className="w-16 h-16 object-cover rounded-full border"
              />
              <div>
                <p className="text-lg font-medium">{professor.name}</p>
                <p className="text-sm text-gray-500">
                  {professor.department?.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
