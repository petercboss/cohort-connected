import React from 'react';

import './ChatMessageArea.css';

  

export const ChatMessageArea = (props) => {
    return (
    <div className='ChatMessageArea'>
        <ul className='chatUL'>
        {(props.messages[0] !== 0) ? (props.children) : (<div className='selectUserDiv'><p>Please Select A User From The Left To Write A Message</p></div>)}
        </ul>
    </div>
    )
};

