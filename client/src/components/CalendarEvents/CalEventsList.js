import React from 'react';

// external stylesheet
import './CalEventsList.css'

export const CalEventsList = ({ children }) => {
  return (
    <div className='eventsBox'>
      <ul className='eventsTodayList'>
        {children}
      </ul>
    </div>
  );
};