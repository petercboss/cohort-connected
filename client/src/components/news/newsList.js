import React from 'react';

// external stylesheet
import './newsList.css'

export const NewsList = ({ children }) => {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  );
};
