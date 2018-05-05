import React from 'react';

// external stylesheet
import './forumList.css'

export const ForumList = ({ children }) => {
  return (
    <div className='forum-list-containers'>
      <div className='list-overflow-container-forum'>
        <ul className='forum-list-overview'>
          {children}
        </ul>
      </div>
    </div>
  );
};