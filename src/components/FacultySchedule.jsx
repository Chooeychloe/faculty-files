import React from "react";
import { CalendarDays } from "lucide-react";

function FacultySchedule({ schedule }) {
  return (
    <div className="p-6 bg-amber-50 rounded shadow font-funnel">
      <h1 className="text-red-900 font-bold text-xl mb-4 flex justify-center items-center gap-2">
        <CalendarDays className="h-6 w-6 text-red-900" />
        Faculty Schedule
      </h1>
      {schedule && Object.keys(schedule).length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse"> {/* Use border-collapse for consistent borders */}
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700"> {/* Changed border-b to border */}
                  Day
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700"> {/* Changed border-b to border */}
                  Time
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700"> {/* Changed border-b to border */}
                  Subject
                </th>
                <th className="py-2 px-4 border border-gray-300 text-left text-gray-700"> {/* Changed border-b to border */}
                  Room
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(schedule).map(([day, classes]) =>
                classes.length > 0 ? (
                  classes.map((item, index) => (
                    <tr
                      key={`${day}-${item.time}-${item.subject}`}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      {index === 0 && (
                        <td
                          rowSpan={classes.length}
                          className="py-2 px-4 border border-gray-300 text-gray-900 capitalize align-top" // Changed border-b to border
                        >
                          {day}
                        </td>
                      )}
                      <td className="py-2 px-4 border border-gray-300 text-gray-900"> {/* Changed border-b to border */}
                        {item.time}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 text-gray-900"> {/* Changed border-b to border */}
                        {item.subject}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 text-gray-900"> {/* Changed border-b to border */}
                        {item.room}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr key={day} className="bg-white">
                    <td className="py-2 px-4 border border-gray-300 text-gray-900 capitalize"> {/* Changed border-b to border */}
                      {day}
                    </td>
                    <td
                      colSpan="3"
                      className="py-2 px-4 border border-gray-300 text-gray-600 italic" // Changed text-gray-50 to text-gray-600 and border-b to border
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
  );
}

export default FacultySchedule;