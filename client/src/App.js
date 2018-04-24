import React, { Component } from 'react';
import Demo from './containers/demo';

//routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// footer component
import Nav from './components/mainNav';
import Footer from './components/footer';

// // pages
import Main from "./pages/main"
// import Login from './pages/login';
import Forum from './pages/forum';
import Messages from './pages/messages';
import Favorites from './pages/favorites';

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
        <Footer/>
        <Demo />
      </div>
    );
  };
};

export default App;
