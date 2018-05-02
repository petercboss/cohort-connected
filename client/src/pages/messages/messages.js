import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// API routes
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './messages.css';
import { Col, Row, Container } from '../../components/Grid';

// app components
import {ChatUserBar}from '../../components/ChatUserBar'
import {ChatMessageArea, CurrentChatHeader, ChatMessageFooter}from '../../components/ChatMessage';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import ChatUser from '../../components/ChatUserBar/ChatUser';
import { isNull } from 'util';



// pages
// import { TLSSocket } from 'tls';

class Messages extends Component {
  state = {
    user: this.props.user,
    users: [],
    messages:[0],
    chatMessage:[],
    selectedUser:[],
    currentChatId:'',
    unreadMessages: this.props.user.unreadMessages
  };
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        {this.setState({ 
          users: res.data
          // selectedUser:res.data[0]
        })})
      // console.log(res)}
      .catch(err => console.log(err));
  };
  componentWillMount() {
    this.setState({user: this.props.user});

  }
  componentDidMount() {
    this.loadUsers();
  }
  getUnreadMessages = () => {
    API.getUser(this.state.user.linkedInId)
    .then((res) => {
      console.log('got update unreads' + res.data.unreadMessages)
      this.setState({unreadMessages:res.data.unreadMessages});
    })
  }

  currentUser = (currentUser) => {
    const updatedUnreadMessages = this.state.unreadMessages.filter(unreadUser => unreadUser !== currentUser._id);
    console.log(updatedUnreadMessages);

    this.setState({ 
      selectedUser: currentUser
      // unreadMessages: updatedUnreadMessages
    }, this.loadChat1(currentUser));

    // update unread message on user
    const removeUnreadMessage = {
      userToUpdate: this.state.user._id,
      userToRemove: currentUser._id
    }
    console.log(removeUnreadMessage.userToRemove)
    
    API.removeUnreadMessage(removeUnreadMessage)
    .then((res) => {this.setState({unreadMessages: res.data.unreadMessages});
    this.loadUsers(); 
    }
    )
    .catch(err => console.log(err));

    this.getUnreadMessages()

  }

  loadChat1 = (currentUser) => {
    console.log('load chat one fired');
    const chatid1 = this.state.user._id + currentUser._id
    console.log('clicked on ' + currentUser.firstName)
    if(chatid1.includes('undefined') === true ){
      return
    }
    API.getMessages(chatid1)
    .then(res =>{
      if (res.data === null) {
        this.loadChat2(currentUser)
        console.log('chatid1 does not exist')
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
  updateChat = (message) => {
    const chatMessage = {
      chatId: this.state.currentChatId,
      senderId: this.state.user._id,
      senderName: this.state.user.firstName,
      sent: Date.now(),
      chatMessage: this.state.chatMessage
    }
    this.setState({chatMessage:[]})
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
    console.log(unreadMessage);
    API.sendUnread(unreadMessage)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err));

  }

  refreshMessage = (chatId) => {
    console.log('messageRefresh');
    API.getMessages(chatId)
    .then(res =>
      {
        this.setState({messages: res.data.messages})
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  
  startMessageRefreshInterval() {
    if(this.state.currentChatId === ''){
        
    } else {
      console.log('message refresh');
      this.refreshMessage(this.state.currentChatId);
    }
  }
  // setInterval(this.refreshMessage(this.state.currentChatId),500)


  handleChange = (event) => {
    this.setState({chatMessage: event.target.value});
  }

    render() {
      // setInterval(this.startMessageRefreshInterval(),1000);  
        return(
          <Container>
            <Row>
              <Col size="md-3 lg-3" className='paddingFix'>
              <ChatUserBar >
                {this.state.users.map( (user) => (<ChatUser user={user} key={user._id} id={user._id} currentUser={this.currentUser} unreadMessages={this.state.unreadMessages}/>))}
              </ChatUserBar>
              </Col>
              <Col size="md-9" className='paddingFix'>
                <CurrentChatHeader currentUser = {this.state.selectedUser}/>
                <ChatMessageArea messages={this.state.messages}>
                {this.state.messages.map((message,i) => (<ChatMessage user={this.state.user} id={message.senderId} key={i} index={i} name={message.senderName} chatMessage={message.chatMessage} date={message.sent}/>))}
                </ChatMessageArea>
                <div className='ChatMessageFooter'>
                <textarea className='messageToSend' value={this.state.chatMessage} onChange={this.handleChange}></textarea>
                <button className='chatSendBtn' onClick={this.updateChat}>Reply</button>
                </div>
              </Col>
            </Row>
          </Container>
        )
    };
};

export default Messages;






// {<ChatMessage key={key} id={message.senderId} name={message.senderName} chatMessage={message.chatMessage} date={message.sent}/>}))}

// {(this.state.message === [0]) ? (<h1>Hello</h1>) : (this.state.messages.map((message) => {<ChatMessage  id={message.senderId} name={message.senderName} chatMessage={message.chatMessage} date={message.sent}/>}))}
// {(this.state.message === [0]) ? (<h1>Hello</h1>) : (Object.keys(this.state.messages).map((key) => {<ChatMessage  key={key} name={this.state.messages[key].senderName} chatMessage={this.state.messages[key].chatMessage}/>}))}