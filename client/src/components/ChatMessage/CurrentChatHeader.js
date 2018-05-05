import React from 'react';

//styling
import './ChatMessageArea.css';

export const CurrentChatHeader = props => (
        <div className='CurrentChatHeader'>
        {(props.currentUser.firstName) ? (
        <div>
        <img src={props.currentUser.profilePicURL} alt="title" className='chatImage' />
        <h1 className='currentName'>{props.currentUser.firstName} {props.currentUser.lastName}</h1>
        </div>) : (<div className='selectUserDiv'><p>Please Select A User From The Left To Write A Message</p></div>)
        }
        </div>
);