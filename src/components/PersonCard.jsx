import React from "react";
import PersonList from "./PersonList";

function PersonCard({ data }) {
  return (
    <div className="font-funnel">
      <h2
        className="bg-zinc-200 p-4 text-3xl font-semibold border-l-8
       border-blue-500 mt-10 shadow-lg shadow-black rounded mb-10 "
      >
        Members of the Department
      </h2>
      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium py-10">
          No matching records found.
        </p>
      ) : (
        <PersonList data={data} />
      )}{" "}
    </div>
  );
}

export default PersonCard;
