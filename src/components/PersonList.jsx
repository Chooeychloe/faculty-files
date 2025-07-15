import React from "react";
import { useNavigate } from "react-router-dom";

function PersonList ({ data }) {

  const navigate = useNavigate();

   const handlePersonClick = (person) => {
    navigate(`/person/${person.last_name}${person.first_name}`, { state: { person } }); // passes the entire person object
  };
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
      {data.map((person, index) => (
        <div
          key={index}
          onClick={() => handlePersonClick(person)}
          className="card bg-white border border-gray-200 rounded-lg shadow hover:scale-105 cursor-pointer transition ease-in-out delay-50"
        >
          {/* Fixed image size */}
          <img
            src={person.image}
            alt={person.name}
            className=" object-cover"
          />
          {/* Consistent content layout */}
          <div className="flex flex-col items-start p-4 font-funnel">
            <h3 className="font-semibold text-lg text-gray-800">{person.name}</h3>
            <p className="bg-red-900 text-white px-3 py-1 rounded mt-2 text-sm">
              {person.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
