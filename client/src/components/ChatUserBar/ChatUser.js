import React, {Component} from 'react';

// external stylesheet and bootstrap style components
import './ChatUserBar.css'
import { Col, Row} from '../../components/Grid';

class ChatUser extends Component {

    unreadMessageUserCheck = () => {
        const filteredArray = this.props.unreadMessages.filter(unreadId => unreadId === this.props.id)
        if (filteredArray.length === 0) {
          console.log('no unread messages')
        } else {
          console.log('unread exists');
        }
      }
    render(props) {
        return (
        <li>
            {(this.props.unreadMessages.filter(unreadId => unreadId === this.props.id).length === 0) ? (
            <Row className='chatRow Unread'>
            <div className='ChatUser' onClick={()=> this.props.currentUser(this.props.user)}>
                <Col size="md-4" className="paddingFix">
                <img src={this.props.user.profilePicURL}  alt="title" className="chatImage" />
                </Col>
                <Col size="md-8">
                <div className='userInfo'>
                    <div className="chatName">{this.props.user.firstName} {this.props.user.lastName} </div>
                    <div className="chatDate">last messaged - {this.props.user.date}</div>
                </div>
                </Col>
            </div>
        </Row>
            ) : (
                <Row className='chatRow'>
                <div className='ChatUser unread' onClick={()=> this.props.currentUser(this.props.user)}>
                    <Col size="md-4" className="paddingFix">
                    <img src={this.props.user.profilePicURL}  alt="title" className="chatImage" />
                    </Col>
                    <Col size="md-8">
                    <div className='userInfo'>
                        <div className="chatName">{this.props.user.firstName} {this.props.user.lastName} </div>
                        <div className="chatDate">last messaged - {this.props.user.date}</div>
                        <div className="chatDate">Unread Messages - {this.props.unreadMessages.filter(unreadId => unreadId === this.props.id).length}</div>
                    </div>
                    </Col>
                </div>
            </Row>
            )}
        </li>)
    }
}
export default ChatUser;