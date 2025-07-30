import React from "react";
import PersonHeader from "../PersonHeader";

function OrgChartShortcut({ navigate }) {
  return (
    <div
      onClick={() => navigate("/")}
      className="bg-red-900 text-center text-amber-400 py-4 shadow-md font-funnel my-4 hover:cursor-pointer"
    >
        <h1 className=" text-lg">
          Department of Computer Studies
        </h1>

        <h2 className=" text-base">Organizational Chart</h2>
    </div>
  );
}

export default OrgChartShortcut;
