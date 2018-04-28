import React from 'react';

//styling
import './ChatMessageArea.css';

export const CurrentChatHeader = props => (
        <div className='CurrentChatHeader'>
        {(props.currentUser.firstName) ? (
        <div>
        <img src={props.currentUser.profilePicURL} alt="title" className='chatImage' />
        <h1 className='currentName'>{props.currentUser.firstName} {props.currentUser.lastName}</h1>
        </div>) : (<h1 className='noSelectedUser'>Click Another User To Start Chatting!</h1>)
        }
        </div>
);