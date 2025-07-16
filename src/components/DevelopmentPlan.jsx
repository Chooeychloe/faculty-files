import React from "react";
import { Award } from "lucide-react";

function DevelopmentPlan({ developmentPlanImage }) {
  return (
    <div className="p-6 bg-amber-50 rounded shadow font-funnel">
      <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2">
        <Award className="h-6 w-6 text-red-900" />
        Individual Development Plan
      </h1>
      <br />
      {developmentPlanImage ? (
        <img src={developmentPlanImage} alt="Development Plan" />
      ) : (
        <p className="text-gray-600">
          No individual development plan image available.
        </p>
      )}
    </div>
  );
}

export default DevelopmentPlan;