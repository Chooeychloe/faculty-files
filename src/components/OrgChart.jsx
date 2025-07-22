import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { people } from "../data";
import PersonHeader from "./PersonHeader";

function OrgChart() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  const chair = people[0];
  const coordinators = people.slice(1, 4);
  const facultyMembers = people.slice(4);

  const handleClick = (person) => {
    const id = `${person.last_name}${person.first_name}`;
    navigate(`/person/${id}`, { state: { person } });
  };

  return (
    <div className="py-10 px-4 bg-amber-50 relative min-h-screen">
      <PersonHeader />

      {/* Year Selection Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["2024-2025", "2023-2024", "2022-2023"].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-full font-medium ${
              selectedYear === year
                ? "bg-red-800 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            } transition`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Conditional View */}
      {selectedYear === "2024-2025" ? (
        <>
          <h2 className="text-center text-3xl font-bold mb-10">
            Organizational Chart <br /> A.Y. 2024–2025
          </h2>

          {/* Chair */}
          <div className="flex justify-center mb-6">
            <div
              className="bg-red-800 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
              onClick={() => handleClick(chair)}
            >
              <img
                src={chair.image}
                alt={chair.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-2 border-4 border-white"
              />
              <p className="text-lg font-bold text-center">{chair.name}</p>
              <p className="text-sm text-center">
                {chair.designation || "Department Chair"}
              </p>
            </div>
          </div>

          {/* Coordinators */}
          <div className="flex justify-center gap-10 mb-10 flex-wrap">
            {coordinators.map((coord, idx) => (
              <div
                key={idx}
                className="bg-yellow-600 text-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                onClick={() => handleClick(coord)}
              >
                <img
                  src={coord.image}
                  alt={coord.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                />
                <p className="font-semibold text-center">{coord.name}</p>
                <p className="text-sm text-center">
                  {coord.designation || "Coordinator"}
                </p>
              </div>
            ))}
          </div>

          {/* Connector Lines */}
          <div className="flex justify-center mb-6">
            <div className="w-[80%] h-8 border-t border-gray-400 relative">
              <div className="absolute top-0 left-1/4 h-8 w-1 bg-gray-400"></div>
              <div className="absolute top-0 left-1/2 h-8 w-1 bg-gray-400"></div>
              <div className="absolute top-0 right-1/4 h-8 w-1 bg-gray-400"></div>
            </div>
          </div>

          {/* Faculty Members */}
          <div className="flex flex-wrap justify-center gap-6">
            {facultyMembers.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-amber-300 text-gray-900 p-4 rounded-lg text-center shadow cursor-pointer hover:scale-105 transition w-48"
                onClick={() => handleClick(faculty)}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-4 border-white"
                />
                <p className="font-medium">{faculty.name}</p>
                <p className="text-sm">{faculty.designation || "Faculty Member"}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img
            src={`/orgcharts/${selectedYear}.png`}
            alt={`Organizational Chart ${selectedYear}`}
            className="max-w-full rounded-xl shadow-md"
          />
        </div>
      )}

     
    </div>
  );
}

export default OrgChart;
