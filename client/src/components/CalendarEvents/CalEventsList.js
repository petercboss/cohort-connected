import React from 'react';

// external stylesheet
import './CalEventsList.css'

export const CalEventsList = ({ children }) => {
  return (
    <div className='eventsBox'>
       {children.length > 0 ? 
        <ul className='eventsTodayList'>
          {children}
        </ul>
       : <h6 className='calEventTitle'>There are no events to show for the date you selected. This may change as the date approaches, so we encourage you to check back.</h6>}
    </div>
  );
};