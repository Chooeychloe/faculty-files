import React from "react";
import { useLocation} from "react-router-dom";
import PersonHeader from "./PersonHeader";
import PersonInfoCard from "./PersonInfoCard";
import EvaluationChart from "./EvaluationChart";
import FacultySchedule from "./FacultySchedule";
import DevelopmentPlan from "./DevelopmentPlan";
import NotFound from "./NotFound";

function PersonDetail() {
  const { state } = useLocation();

  if (!state?.person) {
    return (
     
        <NotFound></NotFound>
     
    );
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
  } = state.person;
  console.log("Development Plan Data:", development_plan);

  return (
    <>
      <PersonHeader />

      <div className="container mx-auto px-4 mt-8">
        {/* Row 1: Personal Information and Documents + Charts/Schedule */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          {/* Section 1: Personal Information and Documents */}
          <div className="w-full lg:w-1/2 flex justify-center items-start">
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
            />
          </div>

          {/* Section 2: Charts and Schedule */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Student Evaluation Graph */}
            <EvaluationChart
              name={name}
              first_name={first_name}
              last_name={last_name}
              evaluationScores={evaluation_scores}
              evaluationLabels={evaluation_labels}
            />

            {/* Faculty Schedule as a Table */}
            <FacultySchedule schedule={schedule} />
          </div>
        </div>

        {/* Row 2: Individual Development Plan */}
        <div className="w-full mb-12">
          <DevelopmentPlan development_plan={development_plan} />
        </div>
      </div>
    </>
  );
}

export default PersonDetail;