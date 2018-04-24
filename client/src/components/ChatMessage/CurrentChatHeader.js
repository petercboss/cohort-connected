import React from 'react';

//styling
import './ChatMessageArea.css';

export const CurrentChatHeader = props => (
    <div className='CurrentChatHeader'>
        <img src='http://via.placeholder.com/75x75' alt="title" className='chatImage' />
        <h1 className='currentName'>CURRENT NAME</h1>
        </div>
);