import React from 'react';

// external stylesheet
import './forumSidebar.css'

export const SidebarList = ({ children }) => {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-myQuestionsList'>
        {children}
      </ul>
    </div>
  );
};