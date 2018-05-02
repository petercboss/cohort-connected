import React, { Component } from 'react';

// external stylesheet and bootstrap style components
import './ChatMessageArea.css';
import {Row} from '../../components/Grid';

  
class ChatMessage extends Component {

    componentDidMount() {
        this.scrollToBottom(this.props.index);
    }  
    scrollToBottom = (ref) => {
        this.refs[ref].scrollIntoView({ behavior: "smooth",block: "end", inline: "nearest" });
    }
    
    render() {
        return (
            <div>
            <li ref={this.props.index}>
                <Row className='chatRow'>
                    <div className='senderUser'>
                        <h3 className='senderChatName'>{this.props.name}</h3>         
                        <div className='chatBubble'>
                            <p>{this.props.chatMessage}</p>
                        </div>
                    </div>
                </Row>
            </li>
            </div>
        );
    }
}
export default ChatMessage;
