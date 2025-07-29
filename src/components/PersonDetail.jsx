import React from "react";
import { useLocation } from "react-router-dom";
import PersonHeader from "./PersonHeader";
import PersonInfoCard from "./FacultyDetails/PersonInfoCard";
import EvaluationChart from "./FacultyDetails/EvaluationChart";
import FacultySchedule from "./FacultyDetails/FacultySchedule";
import DevelopmentPlan from "./FacultyDetails/DevelopmentPlan";
import NotFound from "./NotFound";

function PersonDetail() {
  const { state } = useLocation();

  if (!state?.person) {
    return <NotFound />;
  }

  const {
    first_name,
    last_name,
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
    development_plan,
    membership,
  } = state.person;

  return (
    <>
      <PersonHeader />

      <div className="container mx-auto px-4 mt-8">
        {/* Row 1: Personal Information and Charts */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8 justify-center items-start">
          {/* Section 1: Personal Info */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <PersonInfoCard
              first_name={first_name}
              last_name={last_name}
              name={name}
              designation={designation}
              image={image}
              diploma={diploma}
              masters_diploma={masters_diploma}
              tor={tor}
              resume={resume}
              certificates={certificates}
              speaking_engagements={speaking_engagements}
              membership={membership}
            />
          </div>

          {/* Section 2: Evaluation Chart */}
          <div className="w-full lg:w-1/2 mx-auto mt-12">
            <div className="max-w-full">
              <EvaluationChart
                name={name}
                first_name={first_name}
                last_name={last_name}
                evaluationScores={evaluation_scores}
                evaluationLabels={evaluation_labels}
              />
            </div>
          </div>
        </div>

        {/* Faculty Schedule Table */}
        <div className="w-full mb-12 px-4 lg:px-8">
          <FacultySchedule schedule={schedule} />
        </div>

        {/* Individual Development Plan Table */}
        <div className="w-full mb-12 px-4 lg:px-8">
          <DevelopmentPlan development_plan={development_plan} />
        </div>
      </div>
    </>
  );
}

export default PersonDetail;
