import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// API routes
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './messages.css';
import { Col, Row, Container } from '../../components/Grid';

// app components
import {ChatUserBar}from '../../components/ChatUserBar'
import {ChatMessageArea, CurrentChatHeader} from '../../components/ChatMessage';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatUser from '../../components/ChatUserBar/ChatUser';
import { FormErrors } from '../../components/ContactForm/FormErrors';

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      users: [],
      messages:[0],
      chatMessage:[],
      selectedUser:[],
      currentChatId:'',
      unreadMessages: this.props.user.unreadMessages,
      messageValid: false,
      formValid: false,
      formErrors: {chatMessage:'Message cannot be blank'},
    };
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        {
          res.data.forEach((user) => {
            if (this.state.unreadMessages.includes(user._id)) {
              user.unread = 1;
            } else {
              user.unread = 0;
            }
          })
          this.setState({ 
          users: res.data.sort(function(a,b){
            return b.unread - a.unread 
          })
        })
      })
      .catch(err => console.log(err));
  };
  componentWillMount() {
    this.setState({user: this.props.user});
    this.getUnreadMessages();

  }
  componentDidMount() {
    this.loadUsers();
  }
  
  getUnreadMessages = () => {
    API.getUser(this.state.user.linkedInId)
    .then((res) => {
      this.setState({unreadMessages:res.data.unreadMessages});
      this.props.updateUnreadMessagesHeader(res.data.unreadMessages);
    })
  }
  currentUser = (currentUser) => {
    const updatedUnreadMessages = this.state.unreadMessages.filter(unreadUser => unreadUser !== currentUser._id);
    console.log(updatedUnreadMessages);

    this.setState({ 
      selectedUser: currentUser
    }, this.loadChat1(currentUser));

    const removeUnreadMessage = {
      userToUpdate: this.state.user._id,
      userToRemove: currentUser._id
    }
    
    API.removeUnreadMessage(removeUnreadMessage)
    .then((res) => {this.setState({unreadMessages: res.data.unreadMessages});
    this.loadUsers(); 
    }
    )
    .catch(err => console.log(err));

    this.getUnreadMessages()

  }

  loadChat1 = (currentUser) => {
    const chatid1 = this.state.user._id + currentUser._id
    if(chatid1.includes('undefined') === true ){
      return
    }
    API.getMessages(chatid1)
    .then(res =>{
      if (res.data === null) {
        this.loadChat2(currentUser)
      } else {
       this.setState({
         messages: res.data.messages,
         currentChatId: chatid1
      }); 
      }
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  loadChat2 = (currentUser) => {
    let chatid2 = currentUser._id + this.state.user._id;
    let chatid1 = this.state.user._id + currentUser._id;

    API.getMessages(chatid2)
    .then(res =>
      {
      if (res.data === null) {
        this.createChat(chatid1);
      } else {
        this.setState({
          messages: res.data.messages,
          currentChatId:chatid2
        })
      };
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  createChat = (chatid) => {
    API.createMessage(chatid)
    .then(res =>
      {
        this.setState({
          messages: res.data.messages,
        currentChatId:chatid
        })
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  updateChat = () => {
      if (typeof this.state.chatMessage === 'object' || this.state.chatMessage.split('').filter(content => content !== ' ').length === 0 ) {
      } else {
      const chatMessage = {
        chatId: this.state.currentChatId,
        senderId: this.state.user._id,
        senderName: this.state.user.firstName,
        sent: Date.now().toString(),
        chatMessage: this.state.chatMessage
      }
      this.setState({
        chatMessage:[],
        messageValid: false,
        formValid: false
      })
      API.addMessage(chatMessage)
      .then(res => {
      console.log(res.data)
      this.refreshMessage(this.state.currentChatId)
      })
      .catch(err => console.log(err))
      //push userid into other id
      //get current user from db, push my id into their array
      const unreadMessage = {
            userToUpdate: this.state.selectedUser._id,
            unreadFrom: this.state.user._id
      }
      API.sendUnread(unreadMessage)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }
}

  refreshMessage = (chatId) => {
    API.getMessages(chatId)
    .then(res =>
      {
        this.setState({messages: res.data.messages})
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  
handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({[name]: value,
  })
};
 
    render() {
        return(
          <Container>
            <Row>
              <Col size='md-3' className='paddingFix animated fadeIn'>
              <ChatUserBar >
                {this.state.users.map( (user) => (<ChatUser user={user} key={user._id} id={user._id} selected={this.state.selectedUser} currentUser={this.currentUser} unreadMessages={this.state.unreadMessages}/>))}
              </ChatUserBar>
              </Col>
              <Col size='md-9' className='paddingFix animated fadeIn'>
                <CurrentChatHeader currentUser = {this.state.selectedUser}/>
                <ChatMessageArea messages={this.state.messages}>
                {this.state.messages.map((message,i) => (<ChatMessage user={this.state.user} id={message.senderId} key={i} index={i} name={message.senderName} chatMessage={message.chatMessage} date={message.sent}/>))}
                </ChatMessageArea>
                <div className='ChatMessageFooter'>
                <textarea className='messageToSend' value={this.state.chatMessage} name='chatMessage' onChange={this.handleInputChange} required></textarea>
                <button className='chatSendBtn' onClick={this.updateChat}>Reply</button>
                </div>
              </Col>
            </Row>
          </Container>
        )
    };
};

export default Messages;



// disabled={!this.state.formValid}
