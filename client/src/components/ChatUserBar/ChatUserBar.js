import React from 'react';
// external stylesheet and bootstrap style components
import './ChatUserBar.css'

export const ChatUserBar = ({children}) => {
    return (
    <div className='ChatUserBar'>
        <ul className='chatBarUL'>
            {children}
        </ul>
    </div>
    )
};
