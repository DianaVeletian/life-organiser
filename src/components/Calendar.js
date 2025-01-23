import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        next2Label={null}
        prev2Label={null}
        className="custom-calendar"
      />
    </div>
  );
};

export default CalendarComponent;
