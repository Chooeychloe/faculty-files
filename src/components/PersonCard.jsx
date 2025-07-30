import React, { useState, useEffect } from "react";
import PersonList from "./PersonList";
import { useNavigate } from "react-router-dom";

import { ChevronLeft, ChevronRight } from "lucide-react";

function PersonCard({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  // Calculate total pages based on custom logic
  const totalPages =
    data.length <= 4 ? 1 : 1 + Math.ceil((data.length - 4) / 8);

  // Determine start and end index based on currentPage
  const getCurrentData = () => {
    if (currentPage === 1) {
      return data.slice(0, 4);
    } else {
      const startIndex = 4 + (currentPage - 2) * 8;
      return data.slice(startIndex, startIndex + 8);
    }
  };

  const currentData = getCurrentData();

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-funnel mx-4">
      <h2 className="flex flex-row justify-between items-center bg-amber-50 p-4 text-3xl font-semibold border-l-8 border-red-900 mt-10 shadow-lg shadow-black rounded mb-10 text-red-900">
        Members of the Department
        <button
          onClick={() => navigate("/orgchart")}
          className="text-lg ml-4 px-4 py-2 bg-red-900 text-amber-400  rounded hover:outline-4"
        >
          View Organizational Chart
        </button>
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium py-10">
          No matching records found.
        </p>
      ) : (
        <>
          <PersonList data={currentData} />

          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-amber-50 text-black rounded hover:bg-red-900 disabled:opacity-50"
              aria-label="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-red-900 text-black"
                    : "bg-amber-50 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-amber-50 text-black rounded hover:bg-red-900 disabled:opacity-50"
              aria-label="Next Page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonCard;
