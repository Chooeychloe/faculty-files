import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarChart,ClipboardList, Star, Award,ListTodo,Lightbulb, TrendingUp, BookOpen, CalendarDays, Rocket } from "lucide-react"; // Make sure Rocket is imported if you're using it

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  // --- Data for Student Evaluation Graph (now using data from the 'person' object) ---
  const evaluationData = {
    labels: evaluation_labels || ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Student Evaluation Score (out of 5)",
        data: evaluation_scores || [],
        backgroundColor: "rgba(179, 0, 0, 0.6)",
        borderColor: "rgba(179, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const evaluationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Evaluation for Teachers",
        color: "#333",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: "Score",
        },
      },
      x: {
        title: {
          display: true,
          text: "Evaluation Period",
          
        },
      },
    },
  };

  return (
    <>
      <nav className="bg-red-900 flex flex-row text-amber-50 py-4 shadow-md font-funnel my-4">
        <div
          className="container mx-auto px-6 flex flex-col justify-between items-start ml-16 hover:scale-105 cursor-pointer "
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl font-bold hover:scale-105 cursor-pointer">
            IT/CS Faculty Dashboard
          </h1>
          <h2> Department of Computer Studies</h2>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-red-900 px-4 py-2 rounded font-medium hover:scale-105 cursor-pointer transition mr-5"
        >
          Home
        </button>
      </nav>

      <div className="flex flex-row mb-12">
        {/* section 1 */}
        <div className="w-1/2 mt-12 p-6 bg-amber-50 rounded shadow font-funnel mx-6 ">
          <div className="w-48 h-48 bg-red-900 mb-6 rounded-xl overflow-hidden mx-auto">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>
          <p className="text-center text-red-900 mb-4">{designation}</p>

          <div className="flex flex-col justify-center gap-4 mb-6">
            {diploma && (
              <a
                href={diploma}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-red-900"
              >
                View Undergraduate Diploma
              </a>
            )}
            {masters_diploma && (
              <a
                href={masters_diploma}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-red-900"
              >
                View Masters Diploma
              </a>
            )}
            {tor && (
              <a
                href={tor}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-red-900"
              >
                View TOR
              </a>
            )}
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-red-900"
              >
                View Resume
              </a>
            )}
            {Array.isArray(certificates) && certificates.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Certificates:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {certificates.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-red-900"
                      >
                        View {doc.name || `Certificate ${index + 1}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {Array.isArray(speaking_engagements) &&
              speaking_engagements.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Speaking Engagements:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {speaking_engagements.map((doc, index) => (
                      <li key={index}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-red-900"
                        >
                          View {doc.name || `Certificate ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>

        {/* section 2 */}
        <div className="w-1/2 flex flex-col mt-12 gap-8 mx-6">
          <div className="p-6 bg-amber-50 rounded shadow font-funnel">
            {/* Student Evaluation Graph */}
            <Bar data={evaluationData} options={evaluationOptions} />
            <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2"> {/* Added flex, justify-center, items-center, gap-2 */}
              <Award className="h-6 w-6 text-red-800" />
              Student Evaluation for {name}
            </h1>
          </div>

          {/* Faculty Schedule as a Table */}
          <div className="p-6 bg-amber-50 rounded shadow font-funnel">
            <h1 className="text-red-900 font-bold text-xl mb-4 flex justify-center items-center gap-2"> {/* Added flex, justify-center, items-center, gap-2 */}
              <CalendarDays className="h-6 w-6 text-red-800" />
              Faculty Schedule
            </h1>
            {schedule && Object.keys(schedule).length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left text-gray-700">
                        Day
                      </th>
                      <th className="py-2 px-4 border-b text-left text-gray-700">
                        Time
                      </th>
                      <th className="py-2 px-4 border-b text-left text-gray-700">
                        Subject
                      </th>
                      <th className="py-2 px-4 border-b text-left text-gray-700">
                        Room
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(schedule).map(([day, classes]) =>
                      classes.length > 0 ? (
                        classes.map((item, index) => (
                          <tr
                            key={`${day}-${item.time}-${item.subject}`} // More unique key
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                           {index === 0 && ( // Only render the Day cell for the first item of the day
                              <td
                                rowSpan={classes.length} // Set rowSpan to the number of classes for that day
                                className="py-2 px-4 border-b text-gray-900 capitalize align-top" // Add align-top for better visual
                              >
                                {day}
                              </td>
                            )}
                            <td className="py-2 px-4 border-b text-gray-900">
                              {item.time}
                            </td>
                            <td className="py-2 px-4 border-b text-gray-900">
                              {item.subject}
                            </td>
                            <td className="py-2 px-4 border-b text-gray-900">
                              {item.room}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr key={day} className="bg-white">
                          <td className="py-2 px-4 border-b text-gray-900 capitalize">
                            {day}
                          </td>
                          <td
                            colSpan="3"
                            className="py-2 px-4 border-b text-gray-500 italic"
                          >
                            No classes scheduled
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No faculty schedule available.</p>
            )}
          </div>

          {/* Individual Development Plan (using development_plan_image) */}
          <div className="p-6 bg-amber-50 rounded shadow font-funnel">
              <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2"> {/* Added flex, justify-center, items-center, gap-2 */}
              <TrendingUp className="h-6 w-6 text-red-800" />
              Individual Development Plan
            </h1>
            <br />
            {development_plan_image ? (
              <img src={development_plan_image} alt="Development Plan" />
            ) : (
              <p className="text-gray-600">
                No individual development plan image available.
              </p>
            )}
          
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonDetail;