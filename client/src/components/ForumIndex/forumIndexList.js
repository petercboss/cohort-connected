import React from 'react';

// external stylesheet
import './forumIndex.css'

export const ForumIndexList = ({ children }) => {
  return (
    <div className='forumIndex-container'>
      <ul className='forumIndex-allQuestionsList'>
        {children}
      </ul>
    </div>
  );
};