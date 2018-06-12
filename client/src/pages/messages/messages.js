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
      unreadMessages: this.props.user.unreadMessages
    };
  }

  //Get all Users and populate column 
  loadUsers = () => {
    API.getUsers()
    .then(res => {
      //Loop through each user and check to see if their id is in the unreadMessages array
      res.data.forEach((user) => {
        if (this.state.unreadMessages.includes(user._id)) {
          user.unread = 1;
        } else {
          user.unread = 0;
        }
      })
      this.setState({
        //Sort the users by unread value to stack unread users on top 
      users: res.data.sort(function(a,b){ return b.unread - a.unread})
      })
    })
    .catch(err => console.log(err));
  };

  componentWillMount() {
    //utilize component life cyle, ensure user info and unread message are obtained before loading users
    this.setState({user: this.props.user});
    this.getUnreadMessages();

  }
  componentDidMount() {
    this.loadUsers();
  }
  
  getUnreadMessages = () => {
    //Get Unread messages to update unread array
    API.getUser(this.state.user.linkedInId)
    .then((res) => {
      this.setState({unreadMessages:res.data.unreadMessages});
      //Send Unread Messages up to be passed to Header
      this.props.updateUnreadMessagesHeader(res.data.unreadMessages);
    })
  }
  //Update selectedUser to know who was clicked on
  currentUser = (currentUser) => {
    this.setState({ 
      selectedUser: currentUser
      //Get the previous messages for current user
      }, this.loadChat1(currentUser));
      //create unread message object
    const removeUnreadMessage = {
      userToUpdate: this.state.user._id,
      userToRemove: currentUser._id
    }
    //remove the select users id from my unread messages
    API.removeUnreadMessage(removeUnreadMessage)
    .then((res) => {this.setState({unreadMessages: res.data.unreadMessages});
    //reload user to update unread/read styles
      this.loadUsers(); 
      })
    .catch(err => console.log(err));
    //unread message check
    this.getUnreadMessages()
  }
  //load messages of selected user
  loadChat1 = (currentUser) => {
    //create chat id of myid concat selecteduser id
    const chatid1 = this.state.user._id + currentUser._id
    //ensure user ids registered
    if(chatid1.includes('undefined') === true ){
      return
    }
    //check if the message exist with id of myid concat selecteduser id
    API.getMessages(chatid1)
    .then(res => {
      if (res.data === null) {
        //if this chat id does not exist, check the selecteduser id + myid
        this.loadChat2(currentUser)
        } else {
        //if exists, upate messages 
        this.setState({
          messages: res.data.messages,
          currentChatId: chatid1
          }); 
        }
      })
    .catch(err => console.log(err));
  }
  //load messages of selected user
  loadChat2 = (currentUser) => {
    let chatid2 = currentUser._id + this.state.user._id;
    let chatid1 = this.state.user._id + currentUser._id;

    API.getMessages(chatid2)
    .then(res => {
      if (res.data === null) {
        //if this chat id does not exist create chat with myid + selected user. this is faster
        this.createChat(chatid1);
        } else {
          //if exists, upate messages 
          this.setState({
            messages: res.data.messages,
            currentChatId:chatid2
          })
       };
      })
    .catch(err => console.log(err));
  }
  //Create Chat id if does not exist
  createChat = (chatid) => {
    API.createMessage(chatid)
    .then(res => {
        this.setState({
          messages: res.data.messages,
        currentChatId:chatid
        })
      })
    .catch(err => console.log(err));
  }
  //Update message area when new chat is sent
  updateChat = () => {
      //ensure an empty message is not sent
      if (typeof this.state.chatMessage === 'object' || this.state.chatMessage.split('').filter(content => content !== ' ').length === 0 ) {
      } else {
        //create chat message object
        const chatMessage = {
          chatId: this.state.currentChatId,
          senderId: this.state.user._id,
          senderName: this.state.user.firstName,
          sent: Date.now().toString(),
          chatMessage: this.state.chatMessage
        }
      //empty chat messages
      this.setState({
        chatMessage:[],
      })
      //add message to chat document
      API.addMessage(chatMessage)
      .then(res => {
        console.log(res.data)
        this.refreshMessage(this.state.currentChatId)
      })
      .catch(err => console.log(err))
      //create unread Message id
      const unreadMessage = {
            userToUpdate: this.state.selectedUser._id,
            unreadFrom: this.state.user._id
          }
      //updated selected users unread messages
      API.sendUnread(unreadMessage)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
    }
  }
  //update message area
  refreshMessage = (chatId) => {
    API.getMessages(chatId)
    .then(res => {
      this.setState({messages: res.data.messages})
    })
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
