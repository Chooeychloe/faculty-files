import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function RecentActivity() {
  const [events, setEvents] = useState([
    {
      title: "Uploaded Evaluation Results",
      start: new Date(2025, 6, 20, 9, 0),
      end: new Date(2025, 6, 20, 10, 0),
    },
    {
      title: "Updated Org Chart",
      start: new Date(2025, 6, 21, 13, 0),
      end: new Date(2025, 6, 21, 14, 0),
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Enter a title for the new event:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleSelectEvent = (event) => {
    const action = prompt(
      `Edit or delete the event:\n1. Edit title\n2. Delete\nCancel to skip.`
    );

    if (action === "1") {
      const newTitle = prompt("Enter new title:", event.title);
      if (newTitle) {
        setEvents(
          events.map((e) => (e === event ? { ...e, title: newTitle } : e))
        );
      }
    } else if (action === "2") {
      const confirmDelete = window.confirm("Are you sure you want to delete this event?");
      if (confirmDelete) {
        setEvents(events.filter((e) => e !== event));
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Activity Calendar</h2>
      <div className="h-[500px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}

export default RecentActivity;
