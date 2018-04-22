import React from 'react';

//style
import './NewsList.css'

export const NewsList = ({ children }) => {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  );
};
