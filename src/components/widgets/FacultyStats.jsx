import React from "react";
import { people } from "../../data";

function FacultyStats({navigate}) {
  const total = people.length;

  return (
    <div
      onClick={() => navigate("/home")}
      className="bg-red-900 text-center text-amber-400 py-4 shadow-md font-funnel my-4 hover:cursor-pointer"
    >
      
      <h2 className="text-xl font-semibold">Total Faculty</h2>
      <p className="text-4xl font-bold">{total}</p>
    </div>
  );
}

export default FacultyStats;
