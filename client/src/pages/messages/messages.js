import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// API routes
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './messages.css';
import { Col, Row, Container } from '../../components/Grid';

// app components
import {ChatUserBar, ChatUser}from '../../components/ChatUserBar'
import {ChatMessageArea, CurrentChatHeader, ChatMessage, ChatMessageFooter}from '../../components/ChatMessage';


// pages
// import { TLSSocket } from 'tls';

class Messages extends Component {
  state = {
    user: this.props.user,
    users: [],
    messages:0,
    chatMessage:[],
    selectedUser:[],
    currentChatId:''
  };
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        {this.setState({ 
          users: res.data
          // selectedUser:res.data[0]
        })
      console.log(res)}
      )
      .catch(err => console.log(err));
  };
  componentWillMount() {
    this.setState({user: this.props.user});
    this.loadUsers();
  }
  currentUser = (currentUser) => {
    this.setState({ selectedUser: currentUser }, this.loadChat1());
  }

  loadChat1 = () => {
    const chatid1 = this.state.user._id + this.state.selectedUser._id
    API.getMessages(chatid1)
    .then(res =>{
      if (res.data === null) {
        this.loadChat2()
      } else {
       this.setState({
         messages: res.data,
         currentChatId: chatid1
      }); 
      }
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  loadChat2 = () => {
    let chatid2 = this.state.selectedUser._id + this.state.user._id;
    let chatid1 = this.state.user._id + this.state.selectedUser._id;

    API.getMessages(chatid2)
    .then(res =>
      {
      if (res.data === null) {
        this.createChat(chatid1);
      } else {
        this.setState({
          messages: res.data,
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
          messages: res.data,
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
    this.loadChat1(this.state.selectedUser._id)
    })
    .catch(err => console.log(err))
  }
  handleChange = (event) => {
    this.setState({chatMessage: event.target.value});
    console.log(this.state.chatMessage)
  }


    render() {
        return(
          <Container>
            <Row>
              <Col size="md-3 lg-3" className='paddingFix'>
              <ChatUserBar >
                {this.state.users.map( (user) => (<ChatUser user={user} key={user._id} currentUser={this.currentUser} />))}
              </ChatUserBar>
              </Col>
              <Col size="md-9" className='paddingFix'>
                <CurrentChatHeader currentUser = {this.state.selectedUser}/>
                <ChatMessageArea messages={this.state.messages}>
                  <ChatMessage />
                </ChatMessageArea>
                <div className='ChatMessageFooter'>
                <textarea className='messageToSend' value={this.state.chatMessage} onChange={this.handleChange}></textarea>
                <button className='chatSendBtn' onClick={this.updateChat}>SEND</button>
                </div>
                {/* <ChatMessageFooter updateChat={this.updateChat}/> */}
              </Col>
            </Row>
          </Container>
        )
    };
};

export default Messages;

