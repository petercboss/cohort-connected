import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// API routes
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './messages.css';
import { Col, Row, Container } from '../../components/Grid';

// app components
import {ChatUserBar, ChatUser}from '../../components/ChatUserBar'
import {ChatMessageArea, CurrentChatHeader, ChatMessage}from '../../components/ChatMessage';


// pages
// import { TLSSocket } from 'tls';

class Messages extends Component {
  state = {
    user: this.props.user,
    users: [],
    messages:[0],
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

  currentUser = (currentUser) => {
    this.setState({ selectedUser: currentUser }, this.loadChat1(currentUser));

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
      setInterval(this.startMessageRefreshInterval(),1000);  
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
                <ChatMessageArea>
                {this.state.messages.map((message) => (<ChatMessage  id={message.senderId} name={message.senderName} chatMessage={message.chatMessage} date={message.sent}/>))}
                </ChatMessageArea>
                <div className='ChatMessageFooter'>
                <textarea className='messageToSend' value={this.state.chatMessage} onChange={this.handleChange}></textarea>
                <button className='chatSendBtn' onClick={this.updateChat}>SEND</button>
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