
import React from "react";
import { useLocation } from "react-router-dom";
import PersonHeader from "./PersonHeader";
import PersonInfoCard from "./FacultyDetails/PersonInfoCard";
import EvaluationChart from "./FacultyDetails/EvaluationChart";
import FacultySchedule from "./FacultyDetails/FacultySchedule";
import DevelopmentPlan from "./FacultyDetails/DevelopmentPlan";
import NotFound from "./NotFound";
import Footer from "./widgets/Footer";

function PersonDetail() {
  const { state } = useLocation();

  if (!state?.person) {
    return <NotFound />;
  }

  const {
    first_name,
    last_name,
    name,
    designations,
    image,
    diploma,
    resume,
    tor,
    certificates,
    speaking_engagements,
    masters_diploma,
    eligibility,
    schedule,
    evaluation_scores,
    evaluation_labels,
    development_plan,
    membership,
  } = state.person;

  return (
    <>
      <PersonHeader />

      <div className="container mx-auto px-4 mt-8 pb-16">
        {/* Main wrapper to stack all sections vertically and center them */}
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          {/* Section 1: Personal Info Card - WIDENED */}
          <div className="w-full max-w-6xl">
            <PersonInfoCard
              first_name={first_name}
              last_name={last_name}
              name={name}
              designations={designations}
              image={image}
              diploma={diploma}
              masters_diploma={masters_diploma}
              tor={tor}
              resume={resume}
              eligibility = {eligibility}
              certificates={certificates}
              speaking_engagements={speaking_engagements}
              membership={membership}
            />
          </div>

          {/* Section 2: Evaluation Chart */}
          <div className="w-full max-w-6xl">
            <EvaluationChart
              name={name}
              first_name={first_name}
              last_name={last_name}
              evaluationScores={evaluation_scores}
              evaluationLabels={evaluation_labels}
            />
          </div>

          {/* Section 3: Faculty Schedule Table */}
          <div className="w-full max-w-6xl">
            <FacultySchedule schedule={schedule} />
          </div>

          {/* Section 4: Individual Development Plan Table */}
          <div className="w-full max-w-6xl">
            <DevelopmentPlan development_plan={development_plan} />
          </div>
        </div>
      </div>
      <Footer spanColor={"text-red-900"}></Footer>
    </>
  );
}

export default PersonDetail;
