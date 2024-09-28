import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [dayColors, setDayColors] = useState([]);

  // Fetch day color data from backend
  useEffect(() => {
    fetchDayColors();
  }, []);

  const fetchDayColors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/day-colors"); // Example backend URL
      const data = await response.json();
      setDayColors(data);
    } catch (error) {
      console.error("Error fetching day colors:", error);
    }
  };

  const getColorForDate = (date) => {
    const dayColor = dayColors.find((day) => day.date === date);
    return dayColor ? dayColor.color : "";
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        dayCellDidMount={(info) => {
          const dateStr = info.date.toISOString().split("T")[0]; // Get date in 'YYYY-MM-DD' format
          const bgColor = getColorForDate(dateStr);
          if (bgColor) {
            info.el.style.backgroundColor = bgColor;
            info.el.style.color = "#fff"; // Set text color for better contrast
          }
        }}
      />
    </div>
  );
}

export default Calendar;
