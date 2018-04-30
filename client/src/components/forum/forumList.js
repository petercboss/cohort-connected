import React from 'react';

// external stylesheet
import './forumList.css'

export const ForumList = ({ children }) => {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  );
};