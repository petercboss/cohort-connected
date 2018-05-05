import React, {Component} from 'react';

// external stylesheet and bootstrap style components
import './ChatUserBar.css'
import { Col, Row} from '../../components/Grid';

class ChatUser extends Component {

    render(props) {
        return (
        <li>
            {(this.props.unreadMessages.filter(unreadId => unreadId === this.props.id).length === 0) ? (
            <Row className='chatRow Unread'>
            <div className={(this.props.selected._id === this.props.id) ? 'selectedChatUser': 'chatUser'} onClick={()=> this.props.currentUser(this.props.user)}>
                <Col size="sm-4 md-4 lg-4 xl-4" className="paddingFix">
                <img src={this.props.user.profilePicURL}  alt="title" className="chatImage" />
                </Col>
                <Col size="sm-8 md-8 lg-8 xl-8">
                <div className='userInfo'>
                    <div className="chatName">{this.props.user.firstName} {this.props.user.lastName} </div>
                </div>
                </Col>
            </div>
        </Row>
            ) : (
                <Row className='chatRow'>
                <div className={(this.props.selected._id === this.props.id) ? 'selectedChatUser': 'chatUser'} onClick={()=> this.props.currentUser(this.props.user)}>
                    <Col size="sm-4 md-4 lg-4 xl-4" className="paddingFix">
                    <img src={this.props.user.profilePicURL}  alt="title" className="chatImage" />
                    </Col>
                    <Col size="sm-8 md-8 lg-8 xl-8">
                    <div className='userInfo'>
                        <div className="chatName">{this.props.user.firstName} {this.props.user.lastName} </div>
                        <div className="unreadMessage">Unread - {this.props.unreadMessages.filter(unreadId => unreadId === this.props.id).length}</div>
                    </div>
                    </Col>
                </div>
            </Row>
            )}
        </li>)
    }
}
export default ChatUser;