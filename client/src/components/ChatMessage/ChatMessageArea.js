import React from 'react';

import './ChatMessageArea.css';

  

export const ChatMessageArea = (props) => {
    return (
    <div className='ChatMessageArea'>
        <ul className='chatUL'>
        {(props.messages[0] !== 0) ? (props.children) : (<h1></h1>)}
        </ul>
    </div>
    )
};

