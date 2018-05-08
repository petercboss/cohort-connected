import React from 'react';

//styling
import './ChatMessageArea.css';

export const CurrentChatHeader = props => (
        <div className='CurrentChatHeader'>
        {(props.currentUser.firstName) ? (
        <div>
        <img src={props.currentUser.profilePicURL} alt="title" className='currentChatImage' />
        <h1 className='currentName'>{props.currentUser.firstName} {props.currentUser.lastName}</h1>
        </div>) : (<div className='selectUserDiv'><p>Select a User from the Left to Start Messaging</p></div>)
        }
        </div>
);