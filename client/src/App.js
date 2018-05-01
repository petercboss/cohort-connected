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
import Faq from './pages/faq'

//import test login
// import Demo from './containers/demo';
// import USERProvider from './components/context/USERProvider';

// API routes
import API from './utils/API';

class App extends Component {
  
  state = {
    user:this.props.user,
    updatedUser:{}
  }

  componentWillMount() {
    this.getUserData()
  }
  getUserData() {
    console.log('hello troy' + this.state.user.linkedInId);
    API.getUser(this.state.user.linkedInId)
      .then(res => {
        console.log(res.data);
        console.log('function ran')
        this.setState({updatedUser:res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
  // const { user: user} = this.props
  return (
    <div>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" render={(props) => <Main {...props} user={this.state.updatedUser} />} />
        <Route exact path="/forum"  render={(props) => <Forum {...props} user={this.state.updatedUser}/>} />
        <Route exact path="/messages"  render={(props) => <Messages {...props} user={this.state.updatedUser}/>} />
        <Route path="/favorites"  render={(props) => <Favorites {...props} user={this.state.updatedUser}/>} />
        <Route path="/team" component={Team} />
        <Route path="/faq" component={Faq} />
      </div>
    </Router>
    <Footer />
  </div>
    )
  };
};

export default App;
