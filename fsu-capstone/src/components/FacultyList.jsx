import { useEffect, useState } from "react";
import { getAllFaculty } from "../../api/faculty";
import { Link } from "react-router-dom";

function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    getAllFaculty().then(setFaculty).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Faculty</h2>
      <div className="grid grid-cols-2 gap-4">
        {faculty.map((prof) => (
          <Link
            key={prof.id}
            to={`/faculty/${prof.id}`}
            className="border p-4 rounded hover:bg-gray-50"
          >
            <h3 className="font-semibold">{prof.name}</h3>
            <p>{prof.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FacultyList;
