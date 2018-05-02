import React from 'react';

// external stylesheet
// import './eventsList.css'

export const JobsList = ({ children }) => {
    return (
        <div className='list-overflow-container'>
            <ul className='list-group'>
                {children}
            </ul>
        </div>
    );
};