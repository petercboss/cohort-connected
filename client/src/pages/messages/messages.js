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
    selectedUser:[],
    messageId1:'',
  };
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        {this.setState({ users: res.data})
      console.log(res)}
      )
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.loadUsers();
  }
  currentUser = (currentUser) => {
    this.setState({ selectedUser: currentUser });
    console.log(currentUser);
    this.loadChat1(currentUser)
  }

  loadChat1 = (currentUser) => {
    let chatid1 = this.state.user._id + currentUser._id

    API.getMessages(chatid1)
    .then(res =>
      {
      if (res.data === null) {
        this.loadChat2(currentUser)
      } else {
       this.setState({messages: res.data}) 
      }
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  loadChat2 = (currentUser) => {
    let chatid2 = currentUser._id + this.state.user._id
    let chatid1 = this.state.user._id + currentUser._id

    API.getMessages(chatid2)
    .then(res =>
      {
      if (res.data === null) {
        this.createChat(chatid1);
      } else {
        this.setState({messages: res.data})
      }
    console.log(res.data)}
    )
    .catch(err => console.log(err));
  }
  createChat = (chatid) => {
    API.createMessage(chatid)
    .then(res =>
      {
        this.setState({messages: res.data})
    console.log(res.data)}
    )
    .catch(err => console.log(err));
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
                <ChatMessageFooter />
              </Col>
            </Row>
          </Container>
        )
    };
};

export default Messages;

