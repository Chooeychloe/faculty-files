import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PersonDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.person) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-xl font-bold">
          Person not found. Please go back to the main page.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { name, designation, image, diploma, resume, tor } = state.person;

  return (
    <>
      <nav className="bg-blue-600 text-white py-4 shadow-md font-funnel">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold hover:scale-105 cursor-pointer" onClick={() => navigate("/")}>
            Department of Computer Studies
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:scale-105 cursor-pointer transition"
          >
            Home
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow font-funnel">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-contain mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>
        <p className="text-center text-gray-600 mb-4">{designation}</p>

        <div className="flex flex-col justify-center gap-4 mb-6">
          {diploma && (
            <a
              href={diploma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 "
            >
              View Diploma
            </a>
          )}
          {tor && (
            <a
              href={tor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 "
            >
              View TOR
            </a>
          )}
          {resume && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 "
            >
              View Resume
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default PersonDetail;
