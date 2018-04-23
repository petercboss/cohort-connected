import React from 'react';

// external stylesheet and bootstrap style components
import './ChatMessageArea.css';
import {Row} from '../../components/Grid';
  
export const ChatMessage = props => (
    <div>
    <li>
        <Row className='chatRow'>
            <div className='senderUser'>
                {/* <Col size='md-2' className='paddingFix'> */}
                <h3 className='senderChatName'>SenderName - TimeSent </h3>         
                {/* </Col> */}
                {/* <Col size='md-10'> */}
                <div className='chatBubble'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
                {/* </Col> */}
            </div>
        </Row>
    </li>
        <li>
        <Row className='chatRow'>
            <div className='MyChat'>
                {/* <Col size='md-2' className='paddingFix'> */}
                <h3 className='meChatName'>ME - TimeSent </h3>         
                {/* </Col> */}
                {/* <Col size='md-10'> */}
                <div className='myChatBubble'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettiknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
                </div>
                {/* </Col> */}
            </div>
        </Row>
    </li>
    </div>
);