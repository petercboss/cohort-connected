//Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Main from "./pages/main"
// import Login from './pages/login';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Login /> */}
        {/* <Route exact path='./login' component={Login}/> */}
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="/help" component={Help} />
        <Route exact path="/messages" component={Messages} />
        <Route path="/resouces" component={Resources} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
