"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='w-[100%]'>
      <Calendar 
        onChange={handleDateChange} 
        value={date}
        next2Label={null}
        prev2Label={null}
        />
    </div>
  );
};

export default CalendarComponent;
