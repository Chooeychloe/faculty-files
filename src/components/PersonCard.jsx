import React, { useState, useEffect } from "react";
import PersonList from "./PersonList";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 👈 Icon imports

function PersonCard({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="font-funnel">
      <h2 className="bg-zinc-200 p-4 text-3xl font-semibold border-l-8 border-blue-500 mt-10 shadow-lg shadow-black rounded mb-10 text-blue-600">
        Members of the Department
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium py-10">
          No matching records found.
        </p>
      ) : (
        <>
          <PersonList data={currentData} />

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
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
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
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
