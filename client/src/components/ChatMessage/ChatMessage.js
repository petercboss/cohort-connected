import React from 'react';

// external stylesheet and bootstrap style components
import './ChatMessageArea.css';
import {Row} from '../../components/Grid';
  
export const ChatMessage = props => (
    <div>
    <li>
        <Row className='chatRow'>
            <div className='senderUser'>
                <h3 className='senderChatName'>{props.name}</h3>         
                <div className='chatBubble'>
                    <p>{props.chatMessage}</p>
                </div>
            </div>
        </Row>
    </li>
    </div>
);


/* <li>
<Row className='chatRow'>
    <div className='MyChat'>
        <h3 className='meChatName'>ME - TimeSent </h3>         
        <div className='myChatBubble'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettiknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
        </div>
    </div>
</Row>
</li> */