import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFacultyById } from "../../api/faculty";

function FacultyDetail() {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    getFacultyById(id).then(setProfessor).catch(console.error);
  }, [id]);

  if (!professor) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img
        src={professor.image}
        alt={professor.name}
        className="w-32 h-32 rounded-full"
      />
      <h2 className="text-2xl font-bold mt-2">{professor.name}</h2>
      <p className="text-gray-700">{professor.bio}</p>
      <p className="mt-2 text-sm">Email: {professor.email}</p>
      <p className="mt-1 text-sm">Department: {professor.department?.name}</p>
    </div>
  );
}

export default FacultyDetail;
