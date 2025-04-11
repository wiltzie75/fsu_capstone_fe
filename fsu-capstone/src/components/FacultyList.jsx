import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("data => ", facultyList)
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
    <div className="facultyMainContainer">
      {facultyList.map((faculty) => (
        <div className="facultyWrapper" key={faculty.id}>
          <div className="facultyImgWrapper">
            <img src={faculty.image} alt="it no work" />
          </div>
          <div className="facultyInfoWrapper">
            <div>
              <h3>{faculty.name}</h3>
            </div>
            <div>{faculty.bio}</div>
            <div>{faculty.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
