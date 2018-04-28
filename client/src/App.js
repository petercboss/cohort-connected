import React, { Component } from 'react';

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

//import test login
// import Demo from './containers/demo';
// import USERProvider from './components/context/USERProvider';



class App extends Component {
  render() {
  const { user: user} = this.props
  return (
    <div>
    <Router>
      <div>

        <Nav />
        <Route exact path="/" render={(props) => <Main {...props} user={user}/>} />
        <Route exact path="/forum"  render={(props) => <Forum {...props} user={user}/>} />
        <Route exact path="/messages"  render={(props) => <Messages {...props} user={user}/>} />
        <Route path="/favorites"  render={(props) => <Favorites {...props} user={user}/>} />
        <Route path="/team" component={Team} />

      </div>
    </Router>
    <Footer />
    {/* <USERProvider user={this.props.user} /> */}
  </div>
    )
  };
};

export default App;
