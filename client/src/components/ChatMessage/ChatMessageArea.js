import React from 'react';

import './ChatMessageArea.css';

  

export const ChatMessageArea = (props) => {
    return (
    <div className='ChatMessageArea'>
        <ul className='chatUL'>
        {(props.messages.length > 1) ? (props.children) : (<h1>Please Select A User to Begin Chatting!</h1>)}
        </ul>
    </div>
    )
};

