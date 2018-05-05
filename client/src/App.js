import React, { Component } from 'react';
import './App.css';
//routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// footer component
import Nav from './components/mainNav';
import Footer from './components/footer';

// // pages
import Main from "./pages/main"
import Forum from './pages/forum'
import Messages from './pages/messages'
import Favorites from './pages/favorites'
import Team from './pages/team'

import FAQ from './pages/faq'
import Contact from './pages/contact'


//import test login
// import Demo from './containers/demo';
// import USERProvider from './components/context/USERProvider';

// API routes
import API from './utils/API';

class App extends Component {
  
  state = {
    user:this.props.user,
    updatedUser:{},
    unreadMessages:[],

    // page loader while user object is compiled
    pageLoader: true
  }

  getUserData() {
    API.getUser(this.state.user.linkedInId)
      .then(res => {
        this.setState({
          updatedUser:res.data,
          unreadMessages:res.data.unreadMessages
        })

      })
      .catch(err => console.log(err));
  };

  updateUnreadMessagesHeader(unreadMessages1) {
    this.setState({unreadMessages:unreadMessages1});
  }

  componentDidMount() {
    this.getUserData();
  };


  render() {

  if (this.state.pageLoader) {
    setTimeout(() => this.setState({ pageLoader: false }), 2500);
    return (
      <div className='page-loading'>
        <img className='power-clap animated flip' src={require('./power-clap.png')} alt='BOP-BOP' />
        <h1 className='loading-text animated fadeInUpBig'>Bring it Back with a Power Clap</h1>
      </div>
    )

  } else {
    return (
      <div>
        <Router>
          <div>
          {/* this.props.updateUnreadMessagesHeader(this.state.unreadMessages) */}
            <Nav name={this.props.user.firstName} unreadMessages={this.state.unreadMessages}/>
            <Route exact path="/" render={(props) => <Main {...props} user={this.state.updatedUser} />} />
            <Route exact path="/messages"  render={(props) => <Messages {...props} user={this.state.updatedUser} updateUnreadMessagesHeader={this.updateUnreadMessagesHeader.bind(this)}/>} />
            <Route path="/forum"  render={(props) => <Forum {...props} user={this.state.updatedUser}/>} />
            <Route path="/favorites"  render={(props) => <Favorites {...props} user={this.state.updatedUser}/>} />
            <Route path="/team" component={Team} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </Router>
      </div>
      )
    }
    
  };
};

export default App;
