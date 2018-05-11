import React from 'react';

// external stylesheet
import './favoriteList.css'

export const FavoriteList = ({ children }) => {
  return (
    <div className='FAVE-list-overflow-container'>
      <ul className='FAVE-list-group'>
        {children}
      </ul>
    </div>
  );
};