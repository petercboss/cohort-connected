import React from 'react';

// external stylesheet and bootstrap style components
import './ChatUserBar.css'
import { Col, Row} from '../../components/Grid';

export const ChatUser = props => (
        <li>
            <Row className='chatRow'>
                <div className='ChatUser' onClick={()=> props.currentUser(props.user)}>
                    <Col size="md-4" className="paddingFix">
                    <img src={props.user.profilePicURL}  alt="title" className="chatImage" />
                    </Col>
                    <Col size="md-8">
                    <div className='userInfo'>
                        <div className="chatName">{props.user.firstName} {props.user.lastName} </div>
                        <div className="chatDate">last messaged - {props.user._id}</div>
                    </div>
                    </Col>
                </div>
            </Row>
        </li>
);