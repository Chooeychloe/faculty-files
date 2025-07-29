// Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import QuickSearch from "./widgets/QuickSearch";
// import EvaluationSummary from "../widgets/EvaluationSummary";
import ScheduleToday from "./widgets/ScheduleToday";
import FacultyStats from "./widgets/FacultyStats";
import OrgChartShortcut from "./widgets/OrgChartShortcut";
import DocumentLinks from "./widgets/DocumentLinks";
// import EvaluationTrend from "../widgets/EvaluationTrend";
import RecentActivity from "./widgets/RecentActivity";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-funnel">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <FacultyStats navigate={navigate} />
        <ScheduleToday />
        <OrgChartShortcut navigate={navigate} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* <EvaluationSummary />
        <EvaluationTrend /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <QuickSearch navigate={navigate} />
      </div>

      <RecentActivity />
    </div>
  );
}

export default Dashboard;
