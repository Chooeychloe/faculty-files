import React from "react";

function ScheduleToday() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Today's Schedule</h2>
      <p className="text-sm text-gray-600">Date: {today}</p>
      <ul className="mt-2 text-sm">
        <li>8:00 AM - CS101 Lecture</li>
        <li>10:00 AM - IT202 Lab</li>
        <li>1:00 PM - Meeting with Faculty</li>
      </ul>
    </div>
  );
}

export default ScheduleToday;