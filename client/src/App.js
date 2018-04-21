//Libraries
import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Nav from './components/mainNav';
import Demo from './containers/demo';


//pages
//import Main from "./pages/main"
// import Login from './pages/login';
//import Login from './pages/login';


class App extends Component {
  render() {
    return (
     // <Router>
        <div>
          {/* <Nav /> */}
          <Demo />
          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route exact path="/help" component={Help} />
          <Route exact path="/messages" component={Messages} />
          <Route path="/resouces" component={Resources} /> */}
        </div>
     // </Router>
    );
  };
};

export default App;
