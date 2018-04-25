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

//import test login
// import Demo from './containers/demo';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Main} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/messages" component={Messages} />
            <Route path="/favorites" component={Favorites} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  };
};

export default App;
