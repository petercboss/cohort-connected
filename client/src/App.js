//Libraries
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Main from "./pages/main";
import Login from './pages/login';
import Jobs from './pages/jobs';
import News from './pages/news';



class App extends Component {
  render() {
    return (
      //<Router>
      <div>
        <h1>Welcome</h1>
        <BrowserRouter>
          <div>
          <Route path='/' component={Login} />
          <Route path='/main' component={Main} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/news' component={News} />
    
          {/* <Route exact path="/help" component={Help} />
          <Route exact path="/messages" component={Messages} />
          <Route path="/resouces" component={Resources} /> */}
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
