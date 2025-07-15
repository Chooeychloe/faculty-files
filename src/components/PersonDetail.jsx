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
          className="mt-5 px-4 py-2 bg-blue-600 text-amber-50 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { name, designation, image, diploma, resume, tor, certificates , speaking_engagements,masters_diploma} =
    state.person;

  return (
    <>
      <nav className="bg-red-900 text-amber-50 py-4 shadow-md font-funnel my-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1
            className="text-xl font-bold hover:scale-105 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Department of Computer Studies
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-red-900 px-4 py-2 rounded font-medium hover:scale-105 cursor-pointer transition"
          >
            Home
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto mt-12 p-6 bg-amber-50 rounded shadow font-funnel">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-contain mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>
        <p className="text-center text-red-900 mb-4">{designation}</p>

        <div className="flex flex-col justify-center gap-4 mb-6  ">
          {diploma && (
            <a
              href={diploma}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
              s
            >
              View Undergraduate Diploma
            </a>
          )}
            {masters_diploma && (
            <a
              href={masters_diploma}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
              s
            >
              View Masters Diploma
            </a>
          )}
          {tor && (
            <a
              href={tor}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
            >
              View TOR
            </a>
          )}
          {resume && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
            >
              View Resume
            </a>
          )}
          {Array.isArray(certificates) && certificates.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Certificates:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {certificates.map((doc, index) => (
                  <li key={index}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline hover:text-red-900"
                    >
                     View {doc.name || `Certificate ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
           {Array.isArray(speaking_engagements) && speaking_engagements.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Speaking Engagements:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {speaking_engagements.map((doc, index) => (
                  <li key={index}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline hover:text-red-900"
                    >
                      View {doc.name || `Certificate ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PersonDetail;
