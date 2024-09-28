// src/MyCalendar.js

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import '../MyCustomCalendar.css';

const Calender = () => {
  const [value, onChange] = useState(new Date()); // Initialize with the current date

  const handleChange = (newValue) => {
    console.log("Selected date(s): ", newValue);
    onChange(newValue);
  };

  return (
    <div>  <Link to='/CalenderP'
    spy={true}
    smooth={true}
    >Calender</Link>
    
      <h2>Select a Date</h2>
      
      <Calendar
        onChange={handleChange}
        value={value}
        selectRange={true} // Enable range selection
        style={{
          border: "2px solid #007bff",
          borderRadius: "10px",
          padding: "20px",
          background :"red"
        }}
      />
    </div>
  );
};

export default Calender;
