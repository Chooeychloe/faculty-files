import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PersonHeader from "./PersonHeader";
import PersonInfoCard from "./PersonInfoCard";
import EvaluationChart from "./EvaluationChart";
import FacultySchedule from "./FacultySchedule";
import DevelopmentPlan from "./DevelopmentPlan";

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

  const {
    name,
    designation,
    image,
    diploma,
    resume,
    tor,
    certificates,
    speaking_engagements,
    masters_diploma,
    schedule,
    evaluation_scores,
    evaluation_labels,
    development_plan_image,
  } = state.person;

  return (
    <>
      <PersonHeader />

      <div className="flex flex-row mb-12">
        {/* Section 1: Personal Information and Documents */}
        <PersonInfoCard
          name={name}
          designation={designation}
          image={image}
          diploma={diploma}
          masters_diploma={masters_diploma}
          tor={tor}
          resume={resume}
          certificates={certificates}
          speaking_engagements={speaking_engagements}
        />

        {/* Section 2: Charts and Schedule */}
        <div className="w-1/2 flex flex-col mt-12 gap-8 mx-6">
          {/* Student Evaluation Graph */}
          <EvaluationChart
            name={name}
            evaluationScores={evaluation_scores}
            evaluationLabels={evaluation_labels}
          />

          {/* Faculty Schedule as a Table */}
          <FacultySchedule schedule={schedule} />

          {/* Individual Development Plan */}
          <DevelopmentPlan developmentPlanImage={development_plan_image} />
        </div>
      </div>
    </>
  );
}

export default PersonDetail;