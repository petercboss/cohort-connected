import React from 'react';

// external stylesheet
import './favoriteList.css'

export const FavoriteList = ({ children }) => {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  );
};