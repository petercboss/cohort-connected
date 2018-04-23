import React from 'react';

// external stylesheet and bootstrap style components
import './ChatUserBar.css'
import { Col, Row} from '../../components/Grid';

export const ChatUser = props => (
        <li>
            <Row className='chatRow'>
                <div className='ChatUser'>
                    <Col size="md-4" className="paddingFix">
                    <img src='http://via.placeholder.com/75x75'  alt="title" className="chatImage" />
                    </Col>
                    <Col size="md-8">
                    <div className='userInfo'>
                        <div className="chatName">Name Here </div>
                        <div className="chatDate">last messaged</div>
                    </div>
                    </Col>
                </div>
            </Row>
        </li>
);