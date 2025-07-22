import React from "react";
import { useNavigate } from "react-router-dom";

function PersonHeader() {
  const navigate = useNavigate();

  return (
    <nav className="bg-red-900 flex flex-row text-amber-50 py-4 shadow-md font-funnel my-4">
      <div
        className="container mx-auto px-6 flex flex-col justify-between items-start ml-16 hover:scale-105 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <h1 className="text-xl font-bold hover:scale-105 cursor-pointer">
          IT/CS Faculty Dashboard
        </h1>
        <h2>Department of Computer Studies</h2>
      </div>
      <button
        onClick={() => navigate("/home")}
        className="bg-white text-red-900 px-4 py-2 rounded font-medium hover:scale-105 cursor-pointer transition mr-5"
      >
        Home
      </button>
    </nav>
  );
}

export default PersonHeader;