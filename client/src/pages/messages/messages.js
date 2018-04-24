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
    users: [],
    messages:[],
  };
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data})
      )
      .catch(err => console.log(err));
  };
    render() {
        return(
          <Container>
            <Row>
              <Col size="md-3 lg-3" className='paddingFix'>
              <ChatUserBar >
                <ChatUser />
              </ChatUserBar>
              </Col>
              <Col size="md-9" className='paddingFix'>
                <CurrentChatHeader />
                <ChatMessageArea>
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

